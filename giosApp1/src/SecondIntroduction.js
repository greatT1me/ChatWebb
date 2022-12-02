import React from "react";
import "./SecondIntroduction.css";
import Group7 from "./Group 7.svg";

export default function SecondIntroduction() {
	return (
		<div className="main_container">
			<div className="header">instant team chats </div>
			<div className="text">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
				Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
				consequat massa
			</div>
			<img src={Group7} alt="the Chat view" />
		</div>
	);
}
