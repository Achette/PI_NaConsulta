import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  UserAccess,
  Login,
  Signin,
  SearchDoctors,
  Schedule,
  Appointment,
  UserInfo,
  Info,
  CompletedInfo,
} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/access" element={<UserAccess />}>
          <Route index element={<Login />} />
          <Route path="/access/signin" element={<Signin />} />
        </Route>
        <Route path="/search" element={<SearchDoctors />} />
        <Route path="/schedule" element={<Schedule />}>
          <Route element={<Appointment />}>
            <Route index element={<Info />} />
            <Route path="/schedule/userinfo" element={<UserInfo />} />
          </Route>
        </Route>
            <Route path="/schedule/userinfo/completedinfo" element={<CompletedInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
