import React from 'react';
import "./DetailCard.css";

function DetailCard({card}) {
	return (
		<div className="detail-card-container">
			{
				(card.name)?
						<div>
							<div className="gif-container">
								<img src={JSON.parse(card.sprites).animated} alt="temp" />
							</div>
							<div className="info-container">
								<div className="info">Name:{card.name}</div>
								<div className="info">Id: {card.Iid}</div>
								<div className="info">Height: {card.height}</div>
								<div className="info">Weight: {card.weight}</div>
								<div className="info">Base Exp: {card.base_experience}</div>
							</div>
						</div>
					:
					<div className="welcome-container">
						<h1>Welcome to Pokedex</h1>
					</div>
				
			}

		</div>
	)
}

export default DetailCard