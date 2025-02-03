import Navbar from "@/Components/Navbar";
import { PortfolioProvider } from "@/Contexts/portfolioContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Navbar />
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
