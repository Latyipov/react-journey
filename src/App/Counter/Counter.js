import React, { useState } from "react"
import "Counter/Counter.css"

export function Counter() {
	
	const [counterValue, setCounterValue] = useState(0);

	const onButtonClick = (countingDirection) => {
		if (countingDirection === '+') {
			setCounterValue(counterValue+1);
			
		}
		if (countingDirection === '-') {
			setCounterValue(counterValue-1);
		}
		
	}

	return (
		<div>
			<button onClick={() => onButtonClick("+")} className='button'>+</button>
			<span className="counterValue">{counterValue}</span>
			<button onClick={() => onButtonClick("-")} className='button'>-</button>
		</div>

	)
}