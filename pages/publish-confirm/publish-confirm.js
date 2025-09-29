import { useEffect } from 'react';

export default function PublishConfirm() {
  useEffect(() => {
    async function publish() {
      try {
        // Grab the code param from the URL
        const queryDict = {};
        window.location.search
          .substring(1)
          .split("&")
          .forEach((item) => {
            const [key, value] = item.split("=");
            queryDict[key] = decodeURIComponent(value);
          });

        // Authenticate
        let response = await fetch(
          `https://gatekeeper-arjsstudio.fly.dev/authenticate/${queryDict.code}`
        );
        response = await response.json();

        // Create the package
        const pkg = new Package(window.session);

        // Serve it to GitHub
        const pagesUrl = await pkg.serve({
          packageType: "github",
          token: response.token, // required, must be an OAuth2 token
          message: "first commit for WebAR!", // optional
        });

        console.log("✅ Published to:", pagesUrl);
      } catch (err) {
        console.error("❌ Publish failed:", err);
      }
    }

    publish();
  }, []);

  return <div>Publishing, please wait...</div>;
}
