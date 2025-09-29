import { useEffect } from "react";

export default function LocationPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ARjsStudioBackend && window.Package) {
      const backend = new window.ARjsStudioBackend();

      const pkg = new window.Package({
        arType: "location",
        assetType: window.assetType,
        assetFile: window.assetFile,
        assetParam: window.assetParam,
      });

      pkg.serve({ packageType: "zip" }).then((base64) => {
        const link = document.createElement("a");
        link.href = `data:application/zip;base64,${base64}`;
        link.download = "ar.zip";
        link.click();
      });
    } else {
      console.error("⚠️ ARjsStudioBackend or Package not available in window");
    }
  }, []);

  return <div>Generating AR package…</div>;
}
