import {Routes,Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Categories from './components/Categories.js';
import AllProducts from './components/AllProducts.js';
import ProductDetail from './components/ProductDetail.js';
import CategoryProducts from './components/CategoryProducts.js';
function App() {
  return (
    <>
      <Header />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
   
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
     
     
      </Routes>
      <Footer />
    
            
    </>
  );
}


export default App;

