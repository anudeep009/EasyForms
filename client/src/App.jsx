import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Jobsform, Scholarshipsform, Login, Signup } from '../exports';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="jobsform" element={<Jobsform />} />
          <Route path="scholarshipsform" element={<Scholarshipsform />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
