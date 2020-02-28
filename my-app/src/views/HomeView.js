import React from 'react';
import { DeskItem } from '../components/DeskItem';
import itemsData from '../data/itemsData';


const HomeView = props => {
	const itemComponents = itemsData.map(
		(itemData, i) => <DeskItem key={i} scale={props.scale} data={itemData} />
	);
	return (
		itemComponents
	);
}

export { HomeView };