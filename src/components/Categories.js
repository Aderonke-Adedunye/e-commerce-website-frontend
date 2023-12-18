import logo from '../logo.svg';
import {Link} from 'react-router-dom';
function Categories(){
    return(
        <section className='container mt-4'>
            {/* Popular Categories */}
          <h3 className='mb-4'>All Categories</h3>
          <div className='row mb-2'>
            {/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                  <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>

                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>

                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>


                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>


                </div>

              </div>
            </div>
            {/* Category Box End */}


          </div>
          <div className='row mb-2'>
            {/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>

                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body"> 
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>

                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body"> 
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>


                </div>

              </div>
            </div>
            {/* Category Box End */}

{/* Category Box */}
            <div className='col-12 mb-4 col-md-3'>
              <div className="card">
                <img className="card-img-top" src={logo} alt="" />
                <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
                  <div className='card-footer'>
                    Product Downloads: 2356
                  </div>


                </div>

              </div>
            </div>
            {/* Category Box End */}


          </div>
          {/* End of Popular Categories*/}

          <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </section>
    );
    }
export default Categories;