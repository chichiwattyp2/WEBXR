import { useEffect } from 'react';

export default function PublishConfirm() {
  useEffect(() => {
    async function publish() {
      let response = await fetch(`https://gatekeeper-arjsstudio.fly.dev/authenticate/${queryDict.code}`);
      response = await response.json();

      const pkg = new Package(window.session);

      const pagesUrl = await pkg.serve({
        packageType: 'github',
        token: response.token,
        message: 'first commit for WebAR!',
      });

      console.log("Published to:", pagesUrl);
    }

    publish();
  }, []);

  return <div>Publishing, please wait...</div>;
}
