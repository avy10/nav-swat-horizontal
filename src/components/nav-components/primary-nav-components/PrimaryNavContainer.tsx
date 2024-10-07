// import { useState, FC, ReactElement, MouseEvent } from "react";
import { useState, FC, MouseEvent } from "react";
import { Box } from "@mui/material";
import PrimaryNavTextBox from "./PrimaryNavTextBox";
import { ISubMenuItem } from "../../models";
import SecondaryNav from "../SecondaryNav";
interface IPrimaryNavContainerProps {
	isActive: boolean;
	label: string;

	updateActiveNavTab: (path: string) => void;
	// updateAnchorEl?: (event: MouseEvent<HTMLElement>) => void;

	// anchorEl: null | HTMLElement;
	// clearAnchorEl: () => void;

	submenu: ISubMenuItem[] | undefined;
	// hoverAction?: (event: MouseEvent<HTMLElement>) => void;
}

const PrimaryNavContainer: FC<IPrimaryNavContainerProps> = ({
	isActive,
	label,

	updateActiveNavTab,
	// updateAnchorEl,
	// anchorEl,
	// clearAnchorEl,
	submenu,
	// hoverAction,
}) => {
	// useEffect(() => {
	//   console.log(nestedAnchorEl);
	// }, [nestedAnchorEl]);
	const [showSubMenu, setShowSubMenu] = useState(false);
	const handleHover = () => setShowSubMenu(true);
	const handleLeave = () => setShowSubMenu(false);
	/* const handleClick = () => {
	if (path !== "undefined") {
		updateActiveNavTab(path);
	}
}; */
	return (
		<Box
			onMouseOver={handleHover}
			onMouseLeave={handleLeave}
			onClick={(event: MouseEvent<HTMLElement>) => {
				updateActiveNavTab(label);
			}}
			sx={{
				background: isActive ? "white" : "#09436d",
				color: isActive ? "#09436d" : "white",
				height: "35px",
				position: "relative",
				borderRight: "1px solid #295b80",
				borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
				cursor: "pointer",
				"&:hover": {
					color: isActive ? "#09436d" : "white",
				},
				"&:after": {
					content: '""',
					display: "block",
					position: "absolute",
					width: "100%",
					height: 0,
					top: 0,
					zIndex: 0,
					transition: "height .2s",
				},
				"&:hover:after": {
					background: "#04284a",
					height: "100%",
					transition: "height .2s",
					opacity: isActive ? "0" : "1",
				},
			}}
		>
			<PrimaryNavTextBox label={label} />

			{showSubMenu && submenu && <SecondaryNav submenu={submenu} />}
		</Box>
	);
};

export default PrimaryNavContainer;
