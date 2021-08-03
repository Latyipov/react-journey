import React, { useState } from "react"
import "App/App.css"

import {Counter} from 'Counter/Counter.js'
import {ChangingSvgColor} from 'IconColorChanger/IconColorChanger.js'


export function App() {
	return (
		<div>
			<h1 className='blinking'>LOOK AT THIS!!!</h1>
			<img src="./src/assets/images/omg-dog.gif"></img>
			<Counter />
			<ChangingSvgColor />
			<h3>Date : {new Date().toDateString()}</h3>
		</div>
	)
}
