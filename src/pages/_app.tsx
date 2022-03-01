import { GlobalStyle } from "../styles/global";
import React from "react";

function MyApp({ Component }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Component />
		</React.Fragment>
	);
}

export default MyApp;
