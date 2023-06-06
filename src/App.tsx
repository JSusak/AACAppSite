import "./App.css";

import { AppRouter } from "./Router";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
//Navbar and footer will likely go here once created as all pages will share those components.
function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
