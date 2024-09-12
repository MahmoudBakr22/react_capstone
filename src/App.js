import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Bookings from "./components/pages/Bookings";
import Confirmed from "./components/pages/confirmed";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/bookings"} element={<Bookings />} />
        <Route path={"/confirmed-booking"} element={<Confirmed />} />
      </Routes>
    </Layout>
  );
};

export default App;
