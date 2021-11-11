import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.min.js";

function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap");
//   }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
