import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, UserAccess } from "./routes";
import { Login } from "./routes/users/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserAccess />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
