
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import PersonalProblems from "./pages/PersonalProblems";
import Signup from "./pages/Signup";
import Select from "./pages/Select";

import Profile from "./pages/Profile";
import Loading from "./pages/Loading";
import Subject from "./pages/Subject";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/select" element={<Select />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/personal" element={<PersonalProblems />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
