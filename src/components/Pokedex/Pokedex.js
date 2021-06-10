import React, {useState, useEffect} from 'react'
import "./Pokedex.css";
import SearchBox from "../SearchBar/SearchBar"
import PokemonList from "../PokemonList/PokemonList"
import DetailCard from "../DetailCard/DetailCard"
import {pokemonData} from "./../../data/PokemonData"



function Pokedex() {
	const [searchValue, setSearchValue] = useState("");
	const [card, setCard] = useState({});
	const [data, setData] = useState([]);
	const [refinedData, setRefinedData] = useState([]);

	useEffect(() => {
		fetchData();	
	}, [])

	const clickHandle = (id) =>{
		refinedData.map((item) => {
			if(item.id==id){
				setCard(item)
			}
		})
		
	}

	const fetchData = () => {
		let dt  = pokemonData.filter((item) => {
			if(item.name){
				return item;
			}
		});
		setRefinedData(dt)
		setData(dt);
	}

	const keyHandler = (e) =>{
		let val = e.target.value;
		val = val.toLowerCase();
		setSearchValue(val);
		if(val){
			let tmp = refinedData.filter((item) => {
				return item.name.indexOf(val) > -1;
			});
			setData(tmp);
		}
		else{
			setData(refinedData);
		}

	}

	return (
		<div className="pokedex-container">
			<div className="left-container">
				<SearchBox search={searchValue} method={keyHandler}/>
				<PokemonList list={data} clickHandler={clickHandle}/>
			</div>
			<div className="right-container">
				<DetailCard card={card}/>
			</div>
		</div>
	)
}

export default Pokedex