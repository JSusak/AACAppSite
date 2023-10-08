import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { PeoplePage } from "./pages/PeoplePage/PeoplePage";
import { WatchOutPage } from "./pages/AppPages/WatchOutPage/WatchOutPage";
import { WatchInPage } from "./pages/AppPages/WatchInPage/WatchInPage";
import { AnimatePresence } from "framer-motion";

//Contains all patterns relating to subpages. Depending on the routed subpage, a new page is shown to the user.
export const AppRouter = (): JSX.Element => {
  const location = useLocation();

  //Fix once watchin/out/contact pages made.
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="people" element={<PeoplePage />} />

        {/**<Route path="codesign" element={<CoDesignPage />} />
         * */}

        <Route path="watchin" element={<WatchInPage />} />
        <Route path="watchout" element={<WatchOutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};
