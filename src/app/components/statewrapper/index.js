'use client';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({
	items: [],
	addItemToCart: (item) => {},
	getNumberOfItems: () => {},
});

export default function StateWrapper({ children }) {
	const [items, setItems] = useState([]);

	function handleAddItemToCart(item) {
		const temp = [...items];
		const found = temp.find((i) => i.id === item.id);
		if (found) {
			found.qty++;
			console.log(found);
		} else {
			item.qty = 1;
			temp.push(item);
		}
		setItems([...temp]);
	}

	function getNumberOfItems() {
		const total = items.reduce((acc, item) => {
			if (item) return (acc += 1);
		}, 0);
		return total;
	}

	return (
		<AppContext.Provider
			value={{
				items: items,
				addItemToCart: handleAddItemToCart,
				getNumberOfItems: getNumberOfItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
