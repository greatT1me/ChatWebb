import React from "react";
import "./ThirdIntroduction.css";
import Group8 from "./Group 8.svg";
import star from "./star.svg";

export default function ThirdIntroduction() {
	const fiveStarrsArray = [1, 1, 1, 1, 1];
	return (
		<div className="third_main_container">
			<img className="img" src={Group8} alt="taking pics" />
			<div className="text_container">
				<div className="header">Best solution for social life! </div>
				<div className="first_introduction_paragraph paragraph ">
					pricing plans that fit like a glove.{" "}
				</div>
				<div className="fisrt_introduction_buttons">
					<div className="third_blue_button">Try it free</div>
					<div className="third_white_button">Get a demo</div>
				</div>
				<hr className="line2" />
				<div className="review">
					<div className="star_raiting">
						{fiveStarrsArray.map((val, i) => {
							return <img key={i + "th star"} className="star" src={star} alt="star" />;
						})}
					</div>
					<div className="review_text">
						40 milion piople use this chatapp and they rate us 5 stars.
					</div>
				</div>
			</div>
		</div>
	);
}
