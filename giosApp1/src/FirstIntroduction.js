import React from "react";
import site_content from "./site content.svg";

export default function FirstIntroduction() {
	return (
		<div className="first_introduction">
			<div className="first_introduction_text">
				<div className="have_your_best_chat">Have your best Chat</div>{" "}
				<div className="first_introduction_paragraph">
					Fast, easy and unlimited calls & messages all around the world
				</div>
				<div className="fisrt_introduction_buttons">
					<div className="fisrt_introduction_try_it_free">Try it free</div>
					<div className="fisrt_introduction_get_a_demo">Get a demo</div>
				</div>
			</div>
			<img className="site_content_img" src={site_content} alt="site_content" />
		</div>
	);
}
