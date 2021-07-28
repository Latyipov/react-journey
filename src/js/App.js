import React, { useState } from "react"
import "css/App.css"
import FlightIcon from '@material-ui/icons/Flight';
import Eye from 'icons/eye.svg'
import {Counter} from 'js/Counter'
import {ChangingSvgColor} from 'js/ChangingSvgColor'


export function App() {
	const [currentSvgColor, setNewSvgColor] = useState('red');
	const updateColor = (color)=> {
		setNewSvgColor(color)
	}
	return (
		<div>
			<h1 className='blinking'>LOOK AT THIS!!!</h1>
			<img src="./src/assets/images/omg-dog.gif"></img>

			<Counter />
			<Eye fill={currentSvgColor} viewBox="0 0 32 32" height="100" width="100"/>
			<FlightIcon style={{ fontSize:100, fill: currentSvgColor}}/>
			<ChangingSvgColor  currentSvgColor={currentSvgColor} updateColor={updateColor}/>
			<h3>Date : {new Date().toDateString()}</h3>
		</div>
	)
}
