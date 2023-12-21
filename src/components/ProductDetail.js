import logo from '../logo.svg';
import {Link} from 'react-router-dom';
function ProductDetail(){
    return(

<section className='container' mt-4>
<div className='row'>
    <div className="col-4">
        <img className="img-thumbnail" src={logo} alt="" />
        </div>
    <div className="col-8">
        <h3>Product Title</h3>
        <p>lorem 1000   kjkdnsiugehnisghiusahnfiuaduygaayuhaufisjofie9ui9rhyiuw3ehuiewy89ufyhweiusyhsfuifhjksnkljfioeuityoewiyoiuteiouhgyfsiudytfusidfy</p>
        <h5 className="card-title text-secondary">Price: N500</h5>
        <p className='mt-3'>
        <Link title='Demo' target='_blank' className='btn btn-sm btn-dark'>
            <i className="fa-solid fa-cart-plus"></i>Demo
          </Link>
        <button title='Add to Cart' className='btn btn-sm btn-primary'>
            <i className="fa-solid fa-cart-plus"></i>Add to Cart
          </button>
          <button title='Buy Now' className='btn btn-sm btn-success  '>
            <i className="fa-solid fa-bag-shopping"></i>Buy Now
          </button>
          <button title='Add to Wishlist' className='btn btn-sm btn-danger'>
            <i className="fa fa-heart"></i>Wishlist
          </button>
          </p>
          <div className='producttags mt-5'>
            <h5>Tags</h5>
          <p>
            <Link to='#' className='badge bg-secondary  text-white me-1'>Html</Link>
            <Link to='#' className='badge bg-secondary  text-white me-1'>Css</Link>
            <Link to='#' className='badge bg-secondary  text-white me-1'>JavaScript</Link>
            <Link to='#' className='badge bg-secondary  text-white me-1'>Html</Link>
            <Link to='#' className='badge bg-secondary  text-white me-1'>Css</Link>
            <Link to='#' className='badge bg-secondary  text-white me-1'>JavaScript</Link>
          </p>
          </div>
    </div>
</div>
</section>

        );
    }
export default ProductDetail;