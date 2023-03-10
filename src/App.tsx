import "./styles/main.scss";
import { BirthdayReminder } from "./pages/BirthdayReminder";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Tours } from "./pages/Tours";
import { Reviews } from "./pages/Reviews";
import { FAQ } from "./pages/FAQ";
import { Menu } from "./pages/Menu";
import { Jobs } from "./pages/Jobs";
import Slider from "./pages/Slider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/birthday-reminder" element={<BirthdayReminder />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/slider" element={<Slider />}></Route>
      </Routes>
    </div>
  );
}

export default App;
