import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Logged from "./layout/Logged";
import Login from "./layout/Login";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SecretPage from "./pages/SecretPage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="logged" element={<Logged />}>
          <Route index element={<SecretPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
