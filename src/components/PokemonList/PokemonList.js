import React from 'react'
import "./PokemonList.css"

function PokemonList({list,clickHandler}) {
	return (
		<div className="list-container">
			{
				list.map((item,index)=>{
					let png = JSON.parse(item.sprites);
					return(
						<div onClick={()=>clickHandler(item.id)} className="pokemon-card" key={index}>
							<img src={png.normal} alt="test" className="card-img"/>
							<p className="card-text">{item.name}</p>
						</div>
					);	
				})
			}
		</div>
	)
}

export default PokemonList