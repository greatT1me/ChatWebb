import React from "react";
import { FooterContent, SocialNet } from "./FooterContent.js";

export default function Footer() {
	return (
		<div className="footer">
			{Object.keys(FooterContent).map((item, i) => {
				return (
					<div key={item + " footer " + i}>
						<div className="list_item list_name link">{item}</div>
						{FooterContent[item].map((listItem, i) => {
							return (
								<div key={listItem + " footer item list " + i} className="list_item  link">
									{listItem}
								</div>
							);
						})}
					</div>
				);
			})}
			<div className="social_net">
				{Object.keys(SocialNet).map((socNet) => {
					return (
						<div key={socNet + " key"} className="soc_net_list_item link">
							<div className="center">{SocialNet[socNet]}</div>
							<div>{socNet}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
