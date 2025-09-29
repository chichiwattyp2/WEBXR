import dynamic from "next/dynamic";

const LocationPage = dynamic(() => import("../../components/LocationPage"), {
  ssr: false, // 🚀 disable SSR
});

export default LocationPage;
