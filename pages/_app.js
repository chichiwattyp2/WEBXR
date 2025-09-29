import Script from "next/script";
import "../styles/globals.css"; // keep this if you already have global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Load AR.js Studio backend script before any page code runs */}
      <Script
        src="https://raw.githack.com/AR-js-org/studio-backend/master/dist/arjs-studio-backend.min.js"
        strategy="beforeInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}
