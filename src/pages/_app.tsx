import FooterSection from "@/components/footerSection";
import HeaderSection from "@/components/headerSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderSection />
      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}
