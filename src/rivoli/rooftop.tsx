import { Accordion, AccordionDetails, AccordionSummary, Chip, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RooftopContainer = styled.div``;

const ALL_INGREDIENTS = [
	'Aperol',
	'Prosecco',
	'Soda Water',
	'Grey Goose',
	'DK Triple Sec',
	'Cranberry Juice',
	'Lime Juice',
	'Sugar Syrup',
	'42 Below',
	'DK Crème de Café',
	'Espresso',
	'Bacardi Carta Blanca',
	'Cazadores Blanco',
	'Bombay Sapphire',
	'Grand Marnier',
	'Lemon Juice',
	'Coke',
	'Martini Bitter',
	'Martini Rosso',
	'Raspberry Syrup',
	'Bacardi 8',
	'Bacardi Oakheart',
	'Mandarin Napoleon',
	'DK Apricot',
	"Dewar's White Label",
	'Pineapple Juice',
	'Patron Silver',
	'DK Wild Strawberry',
	'Strawberry Syrup',
	'Lime Wedges',
	'Mint Leaves',
	'Monin Passionfruit Puree',
	'DK Passionfruit',
	'Grenadine',
	'Pure Scot',
	'Lime',
	'Angostura Bitters',
	'Raspberries',
];

ALL_INGREDIENTS.sort();

const GRANISHES = [
	'Orange Rind',
	'Mint',
	'Raspberries',
	'Lemon Rind',
	'Lime Wedge',
	'Lemon Wedge',
	'Orange Wedge',
	'Lime Wheel',
	'Coffee Beans',
	'Strawberry',
];

interface IAllCocktails {
	[key: string]: {
		image: string;
		ingredients: {
			name: string;
			amount: string | number;
		}[];
		top?: string[];
		garnishes?: string[];
		extra?: string[];
	};
}

const ALL_COCKTAILS: IAllCocktails = {
	'Aperol Spritz': {
		image: require('./images/cocktails/Aperol.svg'),
		ingredients: [
			{ name: 'Aperol', amount: 60 },
			{ name: 'Prosecco', amount: 60 },
			{ name: 'Soda Water', amount: 90 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge'],
		extra: ['Built'],
	},
	Cosmopolitan: {
		image: require('./images/cocktails/Cosmopolitan.svg'),
		ingredients: [
			{ name: 'Grey Goose', amount: 45 },
			{ name: 'DK Triple Sec', amount: 15 },
			{ name: 'Cranberry Juice', amount: 40 },
			{ name: 'Lime Juice', amount: 15 },
			{ name: 'Sugar Syrup', amount: 10 },
		],
		garnishes: ['Orange Rind'],
	},
	'Espresso Martini': {
		image: require('./images/cocktails/Espresso Martini.svg'),
		ingredients: [
			{ name: '42 Below', amount: 40 },
			{ name: 'DK Crème de Café', amount: 20 },
			{ name: 'Sugar Syrup', amount: 5 },
			{ name: 'Espresso', amount: 30 },
		],
		garnishes: ['3 Coffee Beans'],
		extra: ['Shake Well', 'Double Strain'],
	},
	'Long Island Iced Tea': {
		image: require('./images/cocktails/Long Island Iced Tea.svg'),
		ingredients: [
			{ name: '42 Below', amount: 15 },
			{ name: 'Bacardi Carta Blanca', amount: 15 },
			{ name: 'Cazadores Blanco', amount: 15 },
			{ name: 'Bombay Sapphire', amount: 15 },
			{ name: 'Grand Marnier', amount: 15 },
			{ name: 'Lemon Juice', amount: 50 },
			{ name: 'Sugar Syrup', amount: 15 },
		],
		top: ['Ice', 'Coke'],
		garnishes: ['Lemon Wedge'],
	},
	'Traditional Negroni': {
		image: require('./images/cocktails/Traditional Negroni.svg'),
		ingredients: [
			{ name: 'Bombay Sapphire', amount: 30 },
			{ name: 'Martini Bitter', amount: 30 },
			{ name: 'Martini Rosso', amount: 30 },
		],
		top: ['Ice'],
		garnishes: ['Orange Rind'],
		extra: ['Built'],
	},
	'Raspberry Collins': {
		image: require('./images/cocktails/Raspberry Collins.svg'),
		ingredients: [
			{ name: 'Bombay Sapphire', amount: 50 },
			{ name: 'Lemon Juice', amount: 30 },
			{ name: 'Raspberry Syrup', amount: 20 },
			{ name: 'Raspberries', amount: '3' },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Lemon Wedge', 'Raspberries'],
	},
	'Tiki Mandarine': {
		image: require('./images/cocktails/Tiki Mandarine.svg'),
		ingredients: [
			{ name: 'Bacardi 8', amount: 20 },
			{ name: 'Mandarin Napoleon', amount: 10 },
			{ name: 'DK Apricot', amount: 10 },
			{ name: "Dewar's White Label", amount: 20 },
			{ name: 'Lemon Juice', amount: 30 },
			{ name: 'Pineapple Juice', amount: 100 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge', 'Lime Wedge'],
	},
	'Patron Margarita': {
		image: require('./images/cocktails/Patron Margarita.svg'),
		ingredients: [
			{ name: 'Patron Silver', amount: 50 },
			{ name: 'DK Triple Sec', amount: 20 },
			{ name: 'Lime Juice', amount: 60 },
			{ name: 'Sugar Syrup', amount: 20 },
		],
		garnishes: ['Lime Wheel'],
	},
	'Wild Strawberry Mojito': {
		image: require('./images/cocktails/Wild Strawberry Mojito.svg'),
		ingredients: [
			{ name: 'Bacardi Carta Blanca', amount: 30 },
			{ name: 'DK Wild Strawberry', amount: 30 },
			{ name: 'Lime Juice', amount: 30 },
			{ name: 'Strawberry Syrup', amount: 10 },
			{ name: 'Sugar Syrup', amount: 5 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Strawberry', 'Mint Sprig'],
	},
	'Cuban Mojito': {
		image: require('./images/cocktails/Cuban Mojito.svg'),
		ingredients: [
			{ name: 'Bacardi Carta Blanca', amount: 50 },
			{ name: 'Lime', amount: '4 Wedges' },
			{ name: 'Mint Leaves', amount: '6' },
			{ name: 'Sugar Syrup', amount: 10 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Mint Sprig'],
	},
	'Passionfruit Mojito': {
		image: require('./images/cocktails/Passionfruit Mojito.svg'),
		ingredients: [
			{ name: 'Bacardi Carta Blanca', amount: 50 },
			{ name: 'Monin Passionfruit Puree', amount: 50 },
			{ name: 'Lime', amount: '4 Wedges' },
			{ name: 'Mint Leaves', amount: '6' },
			{ name: 'Sugar Syrup', amount: 10 },
		],
		top: ['Ice', 'Soda Water'],
		garnishes: ['Mint Sprig'],
	},
	Zombie: {
		image: require('./images/cocktails/Zombie.svg'),
		ingredients: [
			{ name: 'Pineapple Juice', amount: 20 },
			{ name: 'Bacardi 8', amount: 20 },
			{ name: 'Bacardi Carta Blanca', amount: 20 },
			{ name: 'Bacardi Oakheart', amount: 20 },
			{ name: 'Lime Juice', amount: 20 },
			{ name: 'DK Passionfruit', amount: 10 },
			{ name: 'Grenadine', amount: 10 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge', 'Lime Wheel'],
	},
	'Old Fashioned': {
		image: require('./images/cocktails/Old Fashioned.svg'),
		ingredients: [
			{ name: 'Pure Scot', amount: 50 },
			{ name: 'Sugar Syrup', amount: 10 },
			{ name: 'Angostura Bitters', amount: '3 Dashes' },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge'],
		extra: ['Built'],
	},
};

// Hook
function useLocalStorage<Type>(key: string, initialValue: Type) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: Type) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};
	return [storedValue, setValue];
}

const CocktailImage = styled.img`
`;

export const Rooftop: React.FC = () => {
	const [inStock, setInStock] = useLocalStorage<string[]>("stock",[]);
	const [availableCocktails, setAvaialableCocktails] = useState<string[]>([]);
	const [makingCocktails, setMakingCocktails] = useState<string[]>([]);

	function handleStockChange(ingredient: string) {
		const m_inStock = [...inStock];
		const index = inStock.indexOf(ingredient);

		if (index !== -1) {
			m_inStock.splice(index, 1);
		} else {
			m_inStock.push(ingredient);
		}

		setInStock(m_inStock);
	}

	function handleMakingChange(cocktail: string) {
		const m_makingCocktail = [...makingCocktails];
		const index = makingCocktails.indexOf(cocktail);

		if (index !== -1) {
			m_makingCocktail.splice(index, 1);
		} else {
			m_makingCocktail.push(cocktail);
		}

		setMakingCocktails(m_makingCocktail);
	}

	useEffect(() => {
		const m_availableCocktails = Object.keys(ALL_COCKTAILS).filter((key) => {
			const cocktail = ALL_COCKTAILS[key];
			if (cocktail.ingredients.every((ingredient) => inStock.includes(ingredient.name))) {
				return key;
			}
		});

		setAvaialableCocktails(m_availableCocktails);
	}, [inStock]);

	return (
		<RooftopContainer>
			<Accordion>
				<AccordionSummary>Ingredients List</AccordionSummary>
				<AccordionDetails>
					<div style={{ display: 'flex', flexWrap: 'wrap' }}>
						{ALL_INGREDIENTS.map((ingredient) => {
							const stocked = inStock.includes(ingredient);
							return (
								<Chip
									key={ingredient}
									label={ingredient}
									onClick={() => {
										handleStockChange(ingredient);
									}}
									color="secondary"
									variant={stocked ? 'default' : 'outlined'}
									style={{marginRight: stocked ? 1 : 0, marginLeft: stocked ? 1 : 0}}
								/>
							);
						})}
					</div>
				</AccordionDetails>
			</Accordion>
			<div style={{display: 'flex', width: '100%', height: '90vh', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
				{makingCocktails.map(cocktail => {
					return <CocktailImage src={ALL_COCKTAILS[cocktail].image} />
				})}
			</div>
			<Paper elevation={3} style={{ position: 'fixed', bottom: 8, padding: 4 }}>
				{availableCocktails.map((cocktail) => {
					return (
						<Chip
							color="primary"
							key={cocktail}
							label={cocktail}
							onClick={() => {
								handleMakingChange(cocktail);
							}}
							variant={makingCocktails.includes(cocktail) ? 'default' : 'outlined'}
						/>
					);
				})}
			</Paper>
		</RooftopContainer>
	);
};
