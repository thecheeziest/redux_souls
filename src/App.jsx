import './assets/css/reset.css'
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Info from './pages/Info';
import InfoDetail from './pages/InfoDetail';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* <Route index element={ <Home />} /> */}
                <Route path=":infoNo" element={<Info />}>
                  <Route path=":detailNo" element={<InfoDetail />} />
                </Route>
            </Route>
        </Routes>
    </Router>
  );
};

export default App;
