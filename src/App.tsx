import "./styles/main.scss";
import { BirthdayReminder } from "./pages/BirthdayReminder";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Tours } from "./pages/Tours";
import { Reviews } from "./pages/Reviews";
import { FAQ } from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/birthday-reminder" element={<BirthdayReminder />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
    </div>
  );
}

export default App;
