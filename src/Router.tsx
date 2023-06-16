import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { PeoplePage } from "./pages/PeoplePage/PeoplePage";
import { WatchOutPage } from "./pages/WatchOutPage/WatchOutPage";
import { CoDesignPage } from "./pages/CoDesignPage/CoDesignPage";

//Contains all patterns relating to subpages. Depending on the routed subpage, a new page is shown to the user.
export const AppRouter = (): JSX.Element => {
  const location = useLocation();

  //Fix once watchin/out/contact pages made.
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="people" element={<PeoplePage />} />

      <Route path="watchin" element={<HomePage />} />
      <Route path="watchout" element={<WatchOutPage />} />
      <Route path="codesign" element={<CoDesignPage />} />
    </Routes>
  );
};
