import { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

import { IMenuItem } from "../models";
import PrimaryNavContainer from "./primary-nav-components/PrimaryNavContainer";
interface IPrimaryNavTabProps {
  menuItem: IMenuItem;
  activeNavTab: string;
  updateActiveNavTab: (path: string) => void;
}
const PrimaryNavTab: FC<IPrimaryNavTabProps> = ({
  menuItem,
  activeNavTab,
  updateActiveNavTab,
}) => {
  const { path, label, submenu } = menuItem;

  /* 
	const handleKeyPress = (e: KeyboardEvent) => {
		e.stopPropagation();
		if (e.key === "Enter" || e.key === " ") {
			setShowSubMenu((prev) => !prev);
		} else if (e.key === "Escape") {
			setShowSubMenu(false);
		}
	}; */

  return (
    <ListItem
      sx={{
        padding: 0,
        width: "fit-content",
      }}
    >
      {path !== undefined ? (
        <NavLink to={path}>
          {({ isActive }) => (
            <PrimaryNavContainer
              isActive={activeNavTab === label && isActive}
              label={label}
              submenu={submenu}
              path={path}
              updateActiveNavTab={updateActiveNavTab}
            />
          )}
        </NavLink>
      ) : (
        <PrimaryNavContainer
          isActive={activeNavTab === label}
          label={label}
          submenu={submenu}
          updateActiveNavTab={updateActiveNavTab}
        />
      )}
    </ListItem>
  );
};

export default PrimaryNavTab;
/* <Box
				component="button"
				className={styles.primaryNavTab}
				aria-haspopup="true"
				aria-expanded={showSubMenu}
				aria-controls={`submenu-${menuItem.label}`}
				aria-label={`${menuItem.label}`}
				onMouseOver={handleHover}
				onKeyDown={handleKeyPress}
				onMouseLeave={handleLeave}
				onClick={() => handleClick()}
				tabIndex={0}
				sx={{
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					columnGap: "0px",
					background: isActive ? "white" : "#09436d",
					margin: "0",
					height: "35px",
					color: isActive ? "#09436d" : "white",
					border: "none",
					borderRight: "1px solid #295b80",
					borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
					cursor: "pointer",
					"&:hover": {
						// background: "white",
          background: "#04284a",
						// color: "#09436d",
						color: isActive ? "#09436d" : "white",
						maxHeight: "72px",
					},
					"&:after": {
						content: '""',
						display: "block",
						position: "absolute",
						width: "100%",
						height: 0,
						top: 0,
						zIndex: 0,
						// background: "#04284a",

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
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: "14px",
						padding: "10px",
						zIndex: 10,
					}}
				>
					{menuItem.label}
				</Typography>

				{showSubMenu && menuItem.submenu && (
					<SecondaryNav submenu={menuItem.submenu} />
				)}
			</Box> */
