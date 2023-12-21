//Packages
import {Link} from 'react-router-dom';
//Assets
import logo from '../logo.svg';

function SingleProduct(props) {
  return (
    /* Product Box */
    <div className='col-12 mb-4 col-md-3'>
      <div className="card">

        <Link to='/product/python-timer/123'><img className="card-img-top" src={logo} /></Link>
        <div className="card-body">
          <h4 className="card-title"> <Link to='/product/python-timer/123'>{props.title}</Link></h4>
          <h5 className="card-title text-secondary">Price: N500</h5>
        </div>

        {/* <p className="card-text">Text</p>
        <button className="card-link">Card link</button> */}
        <div className='card-footer'>
          <button title='Add to Cart' className='btn btn-sm btn-primary'>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          <button title='Add to Wishlist' className='btn btn-sm btn-danger'>
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
    /* Product Box End */
  );
}

export default SingleProduct;
