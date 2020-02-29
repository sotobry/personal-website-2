import React from 'react';
import itemsData from '../data/itemsData';
import { DeskItem } from '../components/DeskItem';


const HomeView = props => {
	const itemComponents = itemsData.map(
		(itemData, i) => <DeskItem key={i} scale={props.scale} data={itemData} />
	);
	return itemComponents;
}

export { HomeView };