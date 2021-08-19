import { Link } from "react-router-dom";

const Home = () =>
{
	return(
		<div id="home">
			<div id="home-content">
				<p>Hello and weclome to this website!</p>
				<p>This website displays your steam wishlist in the EGP currency.</p>
				<p>You can go ahead and look at your <Link to="/wishlist" style={{color: "#287BFF", textDecoration: "none"}}>wishlist</Link> yourself or just keep looking at this window...</p>
				<p>DISCLAIMER: This website has nothing to do with Steam or Valve</p>
			</div>
		</div>
	);
};

export default Home;
