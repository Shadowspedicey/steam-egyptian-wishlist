import { Link } from "react-router-dom";
import SteamLogo from "../images/SteamLogo.png";

const Navbar = () =>
{
	return(
		<nav className="navbar">
			<Link to="/" style={{height: "100%", display: "flex", alignItems: "center"}}><img className="steam-logo" src={SteamLogo} alt="Steam Logo"></img></Link>
			<ul>
				<Link to="/"><li>Home</li></Link>
				<Link to="/wishlist">Wishlist</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
