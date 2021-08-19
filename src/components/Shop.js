import { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import UserPage from "./UserPage";

import Loading from "./Loading";

const Shop = () =>
{
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const handleInput = e => 
	{
		if (e.target.value === "") return;
		getUserID(e.target.value);
	};
	const getUserID = async input =>
	{
		try
		{
			setLoading(true);
			const response = await fetch(`https://sleepy-refuge-31472.herokuapp.com/https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=E6AC0DDC56B782D5D4EC5354C9B07CC0&vanityurl=${escape(input)}`);
			const jsonResponse = await response.json();
			if (jsonResponse.response.steamid) showUser(jsonResponse.response.steamid);
			else showUser("no-match");
			setLoading(false);
		} catch (error)
		{
			console.log(error);
		}
	};
	const showUser = id => history.push(`/shop/${id}`);

	return(
		<div id="shop">
			<div className="searchbox" style={{width: "50%"}}>
				<input onBlur={(e) => handleInput(e)}></input>
			</div>
			{
				loading 
					?	<Loading/>
					: <Route exact path="/shop/:userID" component={UserPage}></Route>
			}
		</div>
	);
};

export default Shop;
