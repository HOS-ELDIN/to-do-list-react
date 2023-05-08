import React from "react";

const Header = (props) => {
	return (
		<header
			style={{
				backgroundColor: "orangered",
				color: "white",
			}}
		>
			<h1>{props.title}</h1>
		</header>
	);
};
// this is the props default if the props not passed to the component
Header.defaultProps = {
	title:"no tiltle provided"
}

export default Header;
