import "tailwindcss/tailwind.css";
import "boxicons/css/boxicons.min.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
