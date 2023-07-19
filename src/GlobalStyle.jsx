import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--main-blue: #1F66C2;
		--main-blue-deep: #194175;
		--main-red: #C24133;
		--main-black: #343434;
		--main-darkgrey: #777777;
		--main-grey: #aaaaaa;
		--main-lightgrey: #dcdcdc;
		--main-whitegrey: #efefef;
		--main-white: #ffffff;
	}

	body, textarea {
		font-family: 'Pretendard', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: var(--main-black);
		line-height: 1.65;
	}
	//initializer
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
    hr{
		margin-top: 1rem;
		margin-bottom: 1rem;
		border: none;
		border-top: 3px solid black;
	}
`;

export default GlobalStyle;
