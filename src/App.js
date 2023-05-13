


import Footer from './components/footer';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


import Items from './pages/PageList';
import SingleItem from './pages/SinglePage';
import Home from './pages/home';;


// import SingleItem from './pages/SinglePage';
// import Home from './pages/home';



function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<SingleItem />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
