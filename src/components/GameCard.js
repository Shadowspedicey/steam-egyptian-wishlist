const GameCard = props =>
{
	return(
		<div className="game-card">
			<div className="game-img"><img src={props.info.capsule} alt={props.info.name}></img></div>
			<span className="game-name">{unescape(props.info.name)}</span>
			<div className="game-reviews">
				<span style={{color: "#b2b8bd"}}>OVERALL REVIEWS:</span>
				<span className={`review ${props.info.review_css}`}>{props.info.review_desc}</span>
			</div>
			<div className="game-releasedate">
				<span>RELEASE DATE:</span>
				<span>{props.info.release_string}</span>
			</div>
			<div className="game-pricing">
				{
					props.info.subs[0]
						? props.info.subs[0].discount_pct
							? <div className="game-discount">{props.info.subs[0].discount_pct}%</div>
							: null
						: null
				}
				{
					props.info.subs[0]
						?	
						<div className="game-price">
							{
								props.info.subs[0].discount_pct > 0
									? <span className="game-discounted-price">{Math.round((1 / props.rates.ARS) * (props.info.subs[0].price / 100).toFixed(2) * 100 / (100 - props.info.subs[0].discount_pct) * props.rates.EGP)}</span> 
									: null
							}
							<span>{Math.round((1 / props.rates.ARS) * (props.info.subs[0].price / 100).toFixed(2) * props.rates.EGP)} EGP</span>
						</div>
						:
						<div className="game-price">
							Coming soon
						</div>
				}
			</div>
		</div>
	);
};

export default GameCard;
