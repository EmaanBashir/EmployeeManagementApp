import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (

    <nav className="navbar bg-blue py-3">
      <div className="container">
        <a className="navbar-brand" >
          <img className="img-fluid" src={logo} alt="Sparkleo" />
        </a>
        <span className="navbar-text text-white font-20 d-none d-sm-inline"> Employee Management </span>
      </div>
    </nav>


  );
};

export default Navbar;
