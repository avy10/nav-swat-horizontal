import { useState, FC } from "react";
import MENU_DATA from "./models/menuData";
import styles from "./AppNavigation.module.css";
import { Typography } from "@mui/material";
import List from "@mui/material/List";

import PrimaryNavTab from "./nav-components/PrimaryNavTab";
import OfficeSelections from "./selection/OfficeSelections";
const AppNav: FC = () => {
	const [activeNavTab, setActiveNavTab] = useState<string>("swat/my-inbox");
	const updateActiveNavTab = (newRoute: string) => {
		setActiveNavTab(newRoute);
	};
	return (
		<nav aria-labelledby="mainmenulabel" className={styles.mainNav}>
			<Typography
				variant="h2"
				id="mainmenulabel"
				sx={{
					display: "none",
				}}
			>
				Main Menu
			</Typography>
			<List
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-end",
					columnGap: "0px",
					padding: 0,
				}}
			>
				{MENU_DATA.map((menuItem) => (
					<PrimaryNavTab
						key={menuItem.label}
						menuItem={menuItem}
						activeNavTab={activeNavTab}
						updateActiveNavTab={updateActiveNavTab}
					/>
				))}
			</List>
			<OfficeSelections />
		</nav>
	);
};

export default AppNav;
