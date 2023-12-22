import bugsnax from 'media/other_section/bugsnax.jpg'
import gamePass from 'media/other_section/gamepass.jpg'
import empires from 'media/other_section/empires.jpg'
import playful from 'media/other_section/playful.jpg'

import flight from 'media/other_section/flight.jpg'
import nba from 'media/other_section/nba.jpg'
import minecraft from 'media/other_section/minecraft.jpg'
import chinatown from 'media/other_section/chinatown.jpg'

import gamePassBig from 'media/other_section/gamepass_big.jpg'
import empiresBig from 'media/other_section/empires_big.jpg'
import flightBig from 'media/other_section/flight_big.jpg'
import chinatownBig from 'media/other_section/chinatown_big.jpg'

const firstBlockData = [
	{
		img: bugsnax,
		title: 'Bugsnax',

		subtitle: 'Play now with Xbox Game Pass or purchase',
		cta: 'Get it now',
	},
	{
		img: gamePass,
		bigImg: gamePassBig,
		title: 'Discover your next favorite game',
		subtitle:
			'Play over 100 high-quality games with friends on console, PC, phones and tablets',
		cta: 'JOIN XBOX GAME PASS',
	},
	{
		img: empires,
		bigImg: empiresBig,
		title: 'Age of Empires II: Definitive Edition',
		subtitle: 'Get the all-new Dynasties of India expansion',
		cta: 'GET IT NOW',
		tag: 'NEW DLC',
	},
	{
		img: playful,
		title: 'Bugsnax',
		subtitle: 'Play now with Xbox Game Pass or purchase',
		cta: 'Get it now',
		dark: true,
		tag: 'NEW',
	},
]

const secondBlockData = [
	{
		img: nba,
		title: 'NBA 2K22',
		subtitle: 'Play now with Xbox Game Pass or purchase',
		cta: 'Get it now',
		tag: 'console . cloud',
		dark: true,
	},
	{
		img: chinatown,
		bigImg: chinatownBig,
		title: 'Chinatown Detective Agency',
		subtitle: 'Play now with Xbox Game Pass or purchase',
		cta: 'Get it now',
		tag: 'console . pc . cloud',
	},
	{
		img: flight,
		bigImg: flightBig,
		title: 'Microsoft Flight Simulator: Why I Fly',
		subtitle: 'There’s a play style and flight plan for every pilot',
		cta: 'Learn more',
	},
	{
		img: minecraft,
		title: 'Minecraft Dungeons',
		subtitle: 'Explore the Tower in a whole new light',
		cta: 'Learn more',
	},
]

export { firstBlockData, secondBlockData }
