import "./styles/main.scss";
import { BirthdayReminder } from "./pages/BirthdayReminder";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/birthday-reminder" element={<BirthdayReminder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
