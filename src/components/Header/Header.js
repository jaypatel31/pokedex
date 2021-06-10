import React from 'react'
import "./Header.css";
import {AiFillGithub} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Header() {
	return (
		<div className="header-container">
			<div className="navbar">
				<ul>
					<li><a href="http://github.com/jaypatel31" target="_blank"><AiFillGithub/></a></li>
					<li><a href="#">POKEDEX</a></li>
					<li><a href="http://pateljay.me"><BiWorld/></a></li>
				</ul>
			</div>
		</div>
	)
}

export default Header