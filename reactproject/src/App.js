import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Header } from "./components/shared/header";
import { Welcomesec } from "./components/shared/welcomesec";
import { Mainbody } from "./pages/main/mainbody";
import { DetailsData } from "./pages/details/detailsdata";
import { Footer } from "./components/shared/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Welcomesec />
        <Routes>
          <Route index element={<Mainbody />}></Route>
          <Route path="/details/:id" element={<DetailsData />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
