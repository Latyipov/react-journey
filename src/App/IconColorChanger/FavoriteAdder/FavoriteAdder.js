import React, { useState } from "react"

export function FavoriteAdder(props) {
	const [favoriteColors, setFavoriteColors] = useState([]);


	const onAddToFavoriteButtonClick = () => {
		setFavoriteColors(new Set([...favoriteColors, props.currentColor]));
	}
	const onDeleteButtonClick = (color) => {
		favoriteColors.delete(color)
		setFavoriteColors(new Set([...favoriteColors]));
	}	
	
	const onDownloadColorButtonClick = (color) => {
		props.downloadColor(color)
	}
	
	const favoriteColorsList = [...favoriteColors].map((color, index) => {
		return (
			<li key={color}>
				{color}
				<button className='changer-button' onClick={() => onDownloadColorButtonClick(color)}>Download color</button>
				<button className='changer-button' onClick={() => onDeleteButtonClick(color)}>del</button>
			</li>

		)
	})

	return (
		<div>
			<button className='changer-button' onClick={onAddToFavoriteButtonClick}>ADD TO FAVORITE</button>
			<ol>{favoriteColorsList}</ol>
		</div>
	)

}