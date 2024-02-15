import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
