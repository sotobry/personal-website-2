import React from 'react';
import { DeskItem } from '../components/DeskItem';
import itemsData from '../data/itemsData';
import { Route } from 'react-router-dom'


const HomeView = props => {
	const itemComponents = itemsData.map(
		(itemData, i) => <DeskItem key={i} scale={props.scale} data={itemData} />
	);
	return (
		<Route exact path='/'>
			{itemComponents}
		</Route>
	);
}

export { HomeView };