import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://raw.githack.com/AR-js-org/studio-backend/master/dist/arjs-studio-backend.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
