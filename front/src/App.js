import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SinglePostPage from "./pages/SinglePostPage";
import NewPostPage from "./pages/NewPostPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-100">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postId" element={<SinglePostPage />} />
          <Route path="create" element={<NewPostPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
