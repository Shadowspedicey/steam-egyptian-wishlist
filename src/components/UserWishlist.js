/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import Loading from "./Loading";
import GameCard from "./GameCard";

const UserWishlist = props =>
{
	const [loading, setLoading] = useState(true);
	const [games, setGames] = useState([]);
	const [exchange, setExchange] = useState({});

	const loadWishlist = async () =>
	{
		const response = await fetch(`https://sleepy-refuge-31472.herokuapp.com/https://store.steampowered.com/wishlist/profiles/${props.id}/wishlistdata/?cc=ar`);
		const jsonResponse = await response.json();
		return jsonResponse;
	};

	const loadCurrencyExchange = async () =>
	{
		const response = await fetch("https://openexchangerates.org/api/latest.json?base=USD&app_id=e65e52649fb9471887283138ace5753e");
		const jsonResponse = await response.json();
		return jsonResponse;
	};

	useEffect(() =>
	{
		const fetchWishlist = async () =>
		{
			setLoading(true);
			const wishlistGames = await loadWishlist();
			setGames(Object.values(wishlistGames));
			console.log(Object.values(wishlistGames));
			const currencyExchange = await loadCurrencyExchange();
			setExchange(currencyExchange);
			console.log(currencyExchange);
			setLoading(false);
		};
		fetchWishlist();
	}, []);

	if (loading) return(<Loading/>);
	return(
		<div className="user-wishlist">
			{
				games.map(game =>
					<div><GameCard info={game} rates={exchange.rates}/></div>
				)
			}
		</div>
	);
};

export default UserWishlist;
