import { Link } from 'react-router-dom'
import shoppingBag from '../../assets/shopping-bag.png'
import logo from '../../assets/logo1.png'
import './style.css'

const Navbar = () =>{
    return <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to='/' className="navbar-brand" >
        <img src={logo} alt='logo' width={150} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
          <Link to='/' className="nav-link" >Products</Link>
          <Link to='/' className="nav-link" >Categories</Link>
          <Link to='/' className="nav-link" >About Us</Link>
          <Link to='/' className="nav-link" style={{marginLeft: '16px'}}>
            <img src={shoppingBag} alt='shoppingBag' width={20} style={{marginTop: '-8px'}}/>
          </Link>
        </div>
      </div>
    </div>
  </nav>
  </div>
}
export default Navbar