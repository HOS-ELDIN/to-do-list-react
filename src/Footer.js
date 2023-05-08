import React from "react";

const Footer = ({ length }) => {
	const today = new Date();
	const footerStyle = {
		backgroundColor: "orangered",
		color: "white",
	};
	return (
		<footer style={footerStyle}>
			<p>
				{length === 0
					? "No List Items"
					: length === 1
					? `${length} List Item`
					: `${length} List Items`}
			</p>
			<p>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
