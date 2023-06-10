import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, UserAccess } from "./routes";
import { Login } from "./routes/users/login";
import { Signin } from "./routes/users/signin";
import { SearchDoctors } from "./routes/searchDoctors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/access" element={<UserAccess />}>
          <Route index element={<Login />} />
          <Route path="/access/signin" element={<Signin />} />
        </Route>
        <Route path="/search" element={<SearchDoctors/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
