import "./App.css";
import { Component } from "react";

import NavBar from "./NavBar";
import FirstIntroduction from "./FirstIntroduction";
import SecondIntroduction from "./SecondIntroduction";
import ThirdIntroduction from "./ThirdIntroduction";
import Footer from "./Footer";

const stylesDiv = { display: "inlineFlex", textAlign: "center" };

class App extends Component {
	render() {
		return (
			<div style={stylesDiv}>
				<NavBar />
				<FirstIntroduction />
				<SecondIntroduction />
				<ThirdIntroduction />
				<Footer />
				{/* 
        navbar
        frame33
        frame38
        frame46
        frame47
        */}
			</div>
		);
	}
}

export default App;
