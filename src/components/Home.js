import { Link } from "react-router-dom";

const Home = () =>
{
	return(
		<div id="home">
			<div id="home-content">
				<p>Hello and weclome to this website!</p>
				<p>This website was created for <a href="https://www.theodinproject.com/" id="odin">The Odin Project</a>.</p>
				<p>This website displays your steam wishlist in the currency that you choose in a few clicks.</p>
				<p>You can go ahead and visit the <Link to="/shop" style={{color: "#287BFF", textDecoration: "none"}}>shop</Link> yourself or just keep looking at this window...</p>
				<p>DISCLAIMER: This website has nothing to do with Steam or Valve</p>
			</div>
		</div>
	);
};

export default Home;
