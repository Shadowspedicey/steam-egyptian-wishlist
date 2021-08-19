import { Link } from "react-router-dom";
import SteamLogo from "../images/SteamLogo.png";

const Navbar = () =>
{
	return(
		<nav className="navbar">
			<img className="steam-logo" src={SteamLogo} alt="Steam Logo"></img>
			<ul>
				<Link to="/"><li>Home</li></Link>
				<Link to="/wishlist">Wishlist</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
