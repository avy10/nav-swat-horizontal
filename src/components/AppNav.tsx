import { useState, FC } from "react";
import MENU_DATA from "./models/menuData";
import styles from "./AppNavigation.module.css";
import { Typography } from "@mui/material";
import List from "@mui/material/List";

import PrimaryNavTab from "./nav-components/PrimaryNavTab";
import OfficeSelections from "./selection/OfficeSelections";
import { useLocation } from "react-router-dom";

const findThirdOccurrence = (inputString: string) => {
  let count = 0; // To count occurrences of "/"

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "/") {
      count++;
      if (count === 3) {
        return i; // Return the index of the third occurrence
      }
    }
  }

  return -1; // Return -1 if "/" does not occur three times
};

const AppNav: FC = () => {
  const [activeNavTab, setActiveNavTab] = useState<string>("swat/my-inbox");
  const updateActiveNavTab = (newRoute: string) => {
    setActiveNavTab(newRoute);
  };
  /* /swat/admin/administration/role-admin
/swat/admin/view-user-inbox
/swat/search */
  let { pathname } = useLocation();
  console.log(pathname);
  const thirdInstance = findThirdOccurrence(pathname);
  if (thirdInstance !== -1) {
    pathname = pathname.slice(0, thirdInstance);
  }
  pathname = pathname.slice(0, 0) + pathname.slice(0 + 1);

  console.log("Third slash is found at ", pathname);

  /* // activeNavTab is needed to track changes in navigation for
  primary tabs that do not have a path i.e. upon clicking,
   they do not route to a new page
  */
  return (
    <nav aria-labelledby="mainmenulabel" className={styles.mainNav}>
      <Typography
        // for aria
        variant="h2"
        id="mainmenulabel"
        sx={{
          display: "none",
        }}
      >
        Main Menu
      </Typography>
      {/* list of navigation links i.e. <a> */}
      <List
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          columnGap: "0px",
          padding: 0,
        }}
      >
        {MENU_DATA.map((menuItem, index, arr) => (
          <PrimaryNavTab
            key={menuItem.label}
            menuItem={menuItem}
            activeNavTab={activeNavTab}
            updateActiveNavTab={updateActiveNavTab}
            elementPosition={
              index === 0
                ? "first"
                : index === arr.length - 1
                ? "last"
                : "middle"
            }
            primaryUrlPath={pathname}
          />
        ))}
      </List>
      <OfficeSelections />
    </nav>
  );
};

export default AppNav;
