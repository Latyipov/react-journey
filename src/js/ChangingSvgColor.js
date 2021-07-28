import React, { useState } from "react"
import "css/ChangingSvgColor.css"


export function ChangingSvgColor(props) {
	const [inputColor, setInputColor] = useState('');
	const [isError, setErrorvalue] = useState(false);
	const handleChange = (event) => {
		setInputColor(event.target.value);
	}
	
	function hexToRGB(hex, alpha) {
		var r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
	
		if (alpha) {
			return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
		} else {
			return "rgb(" + r + ", " + g + ", " + b + ")";
		}
	}

	function isColorValid(color) {
		let exampleElement = new Option().style;
		exampleElement.color = color;
		return exampleElement.color===color?true:exampleElement.color===hexToRGB(color)?true:false ;
	
	}
	function saveColor(newColor){
		if(isColorValid(newColor) & newColor!==''){
			props.updateColor(newColor);
			setInputColor('');
			setErrorvalue(false);
		}
		else{
			setErrorvalue(true);
			
		}
	}
	function wrongColorMessage(isError) {
		if(isError){
			return <p className='error'>Wrong color! Enter correct value.</p>
		}
		
	}

	// console.log(props)
	return (
		<div>
			<p>Current color: {props.currentSvgColor}</p>
			<p>Change SVG icon for color:</p>
			<input className='input-text' type="text" onChange={handleChange}  value={inputColor} />
			<button className='save-button' onClick={() => {saveColor(inputColor)}}>SAVE</button>
			{wrongColorMessage(isError)}
		</div>
	)

}