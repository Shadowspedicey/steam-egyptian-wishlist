/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countries from "alpha2-countries";

import Loading from "./Loading";
import UserWishlist from "./UserWishlist";

const UserPage = () =>
{
	const params = useParams();
	const [info, setInfo] = useState({});
	const [loading, setLoading] = useState(false);

	const getUserInfo = async () => 
	{
		try 
		{
			const response = await fetch(`https://sleepy-refuge-31472.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=E6AC0DDC56B782D5D4EC5354C9B07CC0&steamids=${params.userID}`);
			const jsonResponse = await response.json();
			const info = jsonResponse.response.players[0];
			return info;
		} catch (error)
		{
			console.error(error);
		}
	};

	useEffect(() =>
	{
		if (params.userID === "no-match")	setInfo(null);
		else
		{
			const fetchInfo = async () =>
			{
				setLoading(true);
				const info = await getUserInfo();
				setLoading(false);
				console.log(info);
				setInfo(info);
			};
			fetchInfo();
		}
	}, [params.userID]);
	

	if (info)
	{
		if (loading) return(<Loading/>);
		else return(
			<div className="user-page">
				<div className="user-info">
					<div className="user-avatar"><img src={info.avatarfull} alt="User Avtar"></img></div>
					<div className="user-personal-info">
						<span className="user-name">{info.personaname}</span>
						{info.realname ? <span className="user-realname">{info.realname}</span> : null}
						{info.loccountrycode 
							?	
							<div className="user-location-div">
								<span className={`flag-icon flag-icon-${info.loccountrycode.toLowerCase()}`}></span>
								<span className="user-country">{countries.resolveName(`${info.loccountrycode}`)}</span>
							</div>
							: null}
					</div>
				</div>
				<UserWishlist id={params.userID}/>
			</div>
		);
	} else
	{
		return(<div className="user-page no-match">No Match</div>);
	}
};

export default UserPage;
