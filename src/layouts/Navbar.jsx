import logo from '../assets/img/argentBankLogo.png'
import { logOut } from '../libs/redux/actions/authActions';
import store from '../libs/redux/store/store';
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({logged}) {
	let navigate = useNavigate();

	const handleLogOut = () => {
        store.dispatch(logOut())
		navigate('/')
	}
	if(logged) {
		return (
			<nav className="main-nav">
				<div className="main-nav-logo" onClick={() => navigate("/")}>
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
			  	</div>
			  	<div className='nav-item-wrapper'>
					<div className="main-nav-item" onClick={() => navigate("/profile")}>
					  	<i className="fa fa-user-circle"></i>
					  	Tony
					</div>
					<div className="main-nav-item" onClick={handleLogOut}>
					  	<i className="fa fa-sign-out"></i>
					  	Sign Out
					</div>
				</div>
			</nav>
		) 
	} else return (
        <nav className="main-nav">
          	<div className="main-nav-logo" onClick={() => navigate("/")}>
          	  	<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          	  	<h1 className="sr-only">Argent Bank</h1>
          	</div>
          	<div>
          	  	<div onClick={() => navigate("/login")} className="main-nav-item"> <i className="fa fa-user-circle"></i> Sign In </div>
          	</div>
        </nav>
    );
  };