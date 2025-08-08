import { createRoot } from "react-dom/client";
import Header from "./components/header";
import CountryPage from "./pages/countryPage";
createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <CountryPage />
  </>
);
