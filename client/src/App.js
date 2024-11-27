import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/aboutuspage/AboutPage";
import Login from "./pages/loginpage/login.jsx";
import Register from "./pages/signupPage/signUp.jsx";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact/contact";
import Job from "./pages/Job.js"; // Import the JobList component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import JobSearch from "./pages/SearchPage.js";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/JobSearch"
          element={
            <PublicRoute>
              <JobSearch />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/AboutPage"
          element={
            <PublicRoute>
              <AboutPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />
        {/* Add JobList route */}
        <Route
          path="/Job"
          element={
            <PrivateRoute>
              <Job /> {/* Jobs page is protected with PrivateRoute */}
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
