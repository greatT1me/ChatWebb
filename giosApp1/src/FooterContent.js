import React from "react";
import Facebook from "./Facebook.svg";
import Twitter from "./Twitter.svg";
import Instagram from "./Instagram.svg";

export const FooterContent = {
	Chatapp: ["Swag Shop", "careers", "Contact", "About"],
	Partners: ["SMS Marketing", "Find a parner", "Become a partner"],
	product: ["Integrations", "Become a pro", "Templates", "Pricing"],
	Resources: ["Status", "Support", "How to", "manage my data"],
};

export const SocialNet = {
	Instagram: <img src={Instagram} alt="Instagram" className="soc_net_logo" />,
	Facebook: <img src={Facebook} alt="Facebook" className="soc_net_logo" />,
	Twitter: <img src={Twitter} alt="Twitter" className="soc_net_logo" />,
};
