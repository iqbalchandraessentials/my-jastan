import Image from 'next/image'
// import './ScriptNavbar'
import Link from 'next/link'
export default function Navbar() {
    return (    
        <nav className="navbar navbar-expand-lg bg-white pt-3 pb-3">
        <div className="container">
        <Link href="/">
        <a className="navbar-brand" >
            <Image src="/img/jastan.png" width={202} height={50} className="img-fluid" />
        </a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Category</a>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tentang Kami
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
                
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <span className="text-uppercase text-white">Category 1</span>
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <a href="">
                        <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                      </a>
                      <p className="text-white">Short image call to action</p>
      
                    </div>
                    
                  </div>
                </div>
                
      
      
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bisnis
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
      
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <span className="text-uppercase text-white">Category 2</span>
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <a href="">
                        <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                      </a>
                      <p className="text-white">Short image call to action</p>
      
                    </div>
                    
                  </div>
                </div>
                
      
      
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Media
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
      
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                     <span className="text-uppercase text-white">Category 3</span>
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
      
                      <a href="">
                        <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                      </a>
                      <p className="text-white">Short image call to action</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Investor
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
      
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                     <span className="text-uppercase text-white">Category 3</span>
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
      
                      <a href="">
                        <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                      </a>
                      <p className="text-white">Short image call to action</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Keluhan Pelanggan
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
      
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                     <span className="text-uppercase text-white">Category 3</span>
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                    </div>
                    
                    <div className="col-md-4">
      
                      <a href="">
                        <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                      </a>
                      <p className="text-white">Short image call to action</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}
