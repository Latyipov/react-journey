import React, { useState } from "react"
import "IconColorChanger/IconColorChanger.css"
import FlightIcon from '@material-ui/icons/Flight';
import Eye from 'icons/eye.svg'
import { ContactSupportOutlined } from "@material-ui/icons";
import { FavoriteAdder } from "./FavoriteAdder/FavoriteAdder";


export function ChangingSvgColor() {
	const [inputColor, setInputColor] = useState('');
	const [currentColor, setCurrentColor] = useState('red');

	const onTextInputChange = (event) => {
		setInputColor(event.target.value);
	}
	const onSaveButtonClick = () => {
		setCurrentColor(inputColor);
		setInputColor('');
	}

	const favoriteDownloader = (color) => {
		setCurrentColor(color);
	}

	return (
		<div>
			{console.log('1233')}
			<Eye fill={currentColor} viewBox="0 0 32 32" height="100" width="100" />
			<FlightIcon style={{ fontSize: 100, fill: currentColor }} />
			<p>Current color: {currentColor}</p>
			<p>Change SVG icon for color:</p>
			<input className='input-text' type="text" onChange={onTextInputChange} value={inputColor} />
			<button className='changer-button' onClick={onSaveButtonClick}>SAVE</button>
			<FavoriteAdder currentColor={currentColor} downloadColor={favoriteDownloader}/>
		</div>
	)

}