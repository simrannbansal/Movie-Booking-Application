import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import { Button } from "antd";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import BookShow from "./pages/BookShow";
import TheatresForMovie from "./pages/TheatresForMovie";
function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
    {loading && (
      <div className="loader-parent">
        <div className="loader"></div>
      </div>
    )}
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <TheatresForMovie/>
              </ProtectedRoute>
            }
          />
      <Route
            path="/book-show/:id"
            element={
              <ProtectedRoute>
                <BookShow />
              </ProtectedRoute>
            }
          />
      <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
