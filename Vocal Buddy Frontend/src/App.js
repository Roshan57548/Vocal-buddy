import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Product from './Components/Products/Product';
import AboutUs from './Components/About Us/AboutUs';
import ContactUs from './Components/Contact Us/ContactUs';
import Nopage from './Components/404/NoPage';
const Routing = () => {

  return (
    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="product" element={<Product></Product>} />
        <Route path="aboutus" element={<AboutUs></AboutUs>} />
        <Route path="contactus" element={<ContactUs></ContactUs>}/>
        <Route path="*" element={<Nopage></Nopage>} />
    </Routes>

  )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routing />
            <Footer/>
        </BrowserRouter> 
    </div>
  );
}

export default App;
