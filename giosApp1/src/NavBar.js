import React from "react";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="navbar">
			<div className="chat_web">
				Chat<strong>Web</strong>
			</div>
			<div className="navigation_buttons">
				<div className="navigation">
					<div className="button">Products</div>
					<div className="button">Resoirces</div>
					<div className="button">Get a Demo</div>
					<div className="button">Contact</div>
					<div className="button">Log in</div>
				</div>
				<div className="pricing">Pricing & Free trial</div>
			</div>
		</div>
	);
}
