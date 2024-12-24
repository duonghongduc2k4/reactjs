import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Create from "./Create";
import Edit from "./Edit";
import Login from "./Login";
import Detail from "./Detail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
