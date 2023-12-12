import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

	:root {
		--xbox-green: #107c10;
		--light-green: #9bf00b
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		max-width: 100vw;
		overflow-x: hidden;
  	  	font-family: 'Noto Sans', sans-serif;
 	}

	html {
		font-size: 62.5%;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`

export default GlobalStyle
