import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Chip,
	FormControlLabel,
	Paper,
	Switch,
	Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
	'Mandarine Napoleon',
	'DK Apricot',
	"Dewar's White Label",
	'Pineapple Juice',
	'Patron Silver',
	'DK Wild Strawberry',
	'Strawberry Syrup',
	'Mint Leaves',
	'Monin Passionfruit Puree',
	'DK Passionfruit',
	'Grenadine',
	'Pure Scot',
	'Lime',
	'Angostura Bitters',
	'Raspberries',
];

const VODKA = ['42 Below', 'Grey Goose'];

const RUM = ['Bacardi 8', 'Bacardi Carta Blanca', 'Bacardi Oakheart'];

const WHISKY = ["Dewar's White Label", 'Pure Scot'];

const LIQUEUR = [
	'DK Triple Sec',
	'DK Crème de Café',
	'Grand Marnier',
	'Mandarine Napoleon',
	'DK Apricot',
	'DK Wild Strawberry',
	'DK Passionfruit',
];

const SYRUP = ['Raspberry Syrup', 'Strawberry Syrup', 'Grenadine'];

const BITTER = ['Aperol', 'Martini Bitter', 'Angostura Bitters'];

const GIN = ['Bombay Sapphire'];

const TEQUILA = ['Cazadores Blanco', 'Patron Silver'];

const OTHER = [
	'Soda Water',
	'Lime',
	'Prosecco',
	'Cranberry Juice',
	'Lime Juice',
	'Sugar Syrup',
	'Espresso',
	'Lemon Juice',
	'Coke',
	'Martini Rosso',
	'Pineapple Juice',
	'Mint Leaves',
	'Monin Passionfruit Puree',
	'Raspberries',
];

ALL_INGREDIENTS.sort();
VODKA.sort();
RUM.sort();
WHISKY.sort();
LIQUEUR.sort();
SYRUP.sort();
BITTER.sort();
GIN.sort();
TEQUILA.sort();
OTHER.sort();

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

interface ICocktail {
	name: string;
	image: string;
	ingredients: {
		name: string;
		amount: string | number;
	}[];
	top?: string[];
	garnishes?: string[];
	extra?: string[];
}

interface IAllCocktails {
	[key: string]: ICocktail;
}

const ALL_COCKTAILS: IAllCocktails = {
	'Aperol Spritz': {
		name: 'Aperol Spritz',
		image: require('./images/cocktails/Aperol Spritz.svg'),
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
		name: 'Cosmopolitan',
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
		name: 'Espresso Martini',
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
		name: 'Long Island Iced Tea',
		image: require('./images/cocktails/Long Island Iced Tea.svg'),
		ingredients: [
			{ name: '42 Below', amount: 15 },
			{ name: 'Bacardi Carta Blanca', amount: 15 },
			{ name: 'Cazadores Blanco', amount: 15 },
			{ name: 'Bombay Sapphire', amount: 15 },
			{ name: 'Grand Marnier', amount: 15 },
			{ name: 'Lemon Juice', amount: 50 },
			{ name: 'Sugar Syrup', amount: 15 },
			{ name: 'Coke', amount: 'Top' },
		],
		top: ['Ice'],
		garnishes: ['Lemon Wedge'],
	},
	'Traditional Negroni': {
		name: 'Traditional Negroni',
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
		name: 'Raspberry Collins',
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
		name: 'Tiki Mandarine',
		image: require('./images/cocktails/Tiki Mandarine.svg'),
		ingredients: [
			{ name: 'Bacardi 8', amount: 20 },
			{ name: 'Mandarine Napoleon', amount: 10 },
			{ name: 'DK Apricot', amount: 10 },
			{ name: "Dewar's White Label", amount: 20 },
			{ name: 'Lemon Juice', amount: 30 },
			{ name: 'Pineapple Juice', amount: 100 },
		],
		top: ['Ice'],
		garnishes: ['Orange Wedge', 'Lime Wedge'],
	},
	'Patron Margarita': {
		name: 'Patron Margarita',
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
		name: 'Wild Strawberry Mojito',
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
		name: 'Cuban Mojito',
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
		name: 'Passionfruit Mojito',
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
		name: 'Zombie',
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
		name: 'Old Fashioned',
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

const IngredientSection = styled.div`
	margin-bottom: 0.5em;
`;

const IngredientTitle = styled(Typography)`
	margin-bottom: 0.5em;
`;

const IngredientChips = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Rooftop: React.FC = () => {
	const [inStock, setInStock] = useLocalStorage<string[]>('stock', []);
	const [availableCocktails, setAvaialableCocktails] = useState<string[]>([]);
	const [makingCocktails, setMakingCocktails] = useState<string[]>([]);
	const [showAll, setShowAll] = useState(false);

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

	function IngredientChip(ingredient: string) {
		const stocked = inStock.includes(ingredient);
		const usedInNum = Object.keys(ALL_COCKTAILS).filter((key) =>
			ALL_COCKTAILS[key].ingredients.some((cocktailIngredient) => cocktailIngredient.name === ingredient)
		).length;
		return (
			<Chip
				key={ingredient}
				label={`${ingredient} ${usedInNum}`}
				onClick={() => {
					handleStockChange(ingredient);
				}}
				color="secondary"
				variant={stocked ? 'default' : 'outlined'}
				style={{ marginRight: stocked ? 1 : 0, marginLeft: stocked ? 1 : 0 }}
			/>
		);
	}

	return (
		<RooftopContainer>
			<Accordion style={{position: 'fixed', width: '100%'}}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Ingredients List</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<IngredientSection>
							<IngredientTitle>Vodka</IngredientTitle>
							<IngredientChips>{VODKA.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Rum</IngredientTitle>
							<IngredientChips>{RUM.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Whisky</IngredientTitle>
							<IngredientChips>{WHISKY.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Liqueur</IngredientTitle>
							<IngredientChips>{LIQUEUR.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Syrup</IngredientTitle>
							<IngredientChips>{SYRUP.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Bitters</IngredientTitle>
							<IngredientChips>{BITTER.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Gin</IngredientTitle>
							<IngredientChips>{GIN.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Tequila</IngredientTitle>
							<IngredientChips>{TEQUILA.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
						<IngredientSection>
							<IngredientTitle>Other</IngredientTitle>
							<IngredientChips>{OTHER.map(IngredientChip)}</IngredientChips>
						</IngredientSection>
					</div>
				</AccordionDetails>
			</Accordion>
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100vh',
					padding: '10% 0',
					boxSizing: 'border-box',
					justifyContent: 'space-around',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				{Object.keys(ALL_COCKTAILS).map((cocktail) => {
					return (
						<Cocktail
							key={cocktail}
							cocktail={cocktail}
							instock={inStock}
							hidden={!makingCocktails.includes(cocktail)}
						/>
					);
				})}
			</div>
			<Paper elevation={3} style={{ position: 'fixed', bottom: 8, padding: 4 }}>
				<FormControlLabel
					control={<Switch checked={showAll} onChange={(e) => setShowAll(e.target.checked)} color="primary" />}
					label="Show All"
					labelPlacement="start"
				/>
				{(showAll ? Object.keys(ALL_COCKTAILS) : availableCocktails).map((cocktail) => {
					const missingIngredients = ALL_COCKTAILS[cocktail].ingredients.filter(
						(ingredient) => !inStock.includes(ingredient.name)
					).length;
					return (
						<Chip
							color={availableCocktails.includes(cocktail) ? 'primary' : 'secondary'}
							key={cocktail}
							label={missingIngredients > 0 ? `${cocktail} ${missingIngredients}` : cocktail}
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

const CocktailTitle = styled.span`
	font-weight: bold;
	font-size: 1.1rem;
`;

const CocktailContainer = styled.div`
	display: ${(hidden: {hidden?: boolean}) => hidden.hidden ? 'none' : 'flex'};
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
`;

const CocktailText = styled(Typography)``;

interface CocktailProps {
	cocktail: string;
	instock: string[];
	hidden?: boolean;
}

const Cocktail: React.FC<CocktailProps> = (props: CocktailProps) => {
	const cocktail = ALL_COCKTAILS[props.cocktail];
	return (
		<CocktailContainer hidden={props.hidden}>
			<CocktailTitle style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{cocktail.name}</CocktailTitle>
			<img style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0.5em 0' }} src={cocktail.image} />
			{cocktail.ingredients.map((ingredient) => {
				return (
					<div
						key={ingredient.name}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							background: !props.instock.includes(ingredient.name) ? '#ff000050' : '',
						}}
					>
						<CocktailText>{ingredient.name}</CocktailText>
						<CocktailText style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
							{typeof ingredient.amount === 'number' ? `${ingredient.amount}ml` : ingredient.amount}
						</CocktailText>
					</div>
				);
			})}
			<div style={{ height: '0.5em' }} />
			{cocktail.top?.map((top) => {
				return <CocktailText key={top}>{top}</CocktailText>;
			})}
			{cocktail.garnishes?.map((garnish) => {
				return <CocktailText key={garnish}>{garnish}</CocktailText>;
			})}
			{cocktail.extra?.map((extra) => {
				return (
					<CocktailText key={extra} style={{ fontStyle: 'italic' }}>
						{extra}
					</CocktailText>
				);
			})}
		</CocktailContainer>
	);
};
