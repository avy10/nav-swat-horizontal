import { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

import { IMenuItem } from "../models";
import PrimaryNavContainer from "./primary-nav-components/PrimaryNavContainer";
interface IPrimaryNavTabProps {
  menuItem: IMenuItem;
  activeNavTab: string;
  updateActiveNavTab: (path: string) => void;
  elementPosition: string;
  primaryUrlPath: string;
}

const checkNavActive = (
  primaryUrlPath: string,
  pathValue: string | undefined,
  label: string
) => {
  if (pathValue !== undefined) {
    return primaryUrlPath === pathValue;
  } else {
    const labelWords = label.split(" ");
    const labelPath = labelWords.map((word) => word.toLowerCase()).join("-");
    const labelURL = "swat/" + labelPath;
    return labelURL === primaryUrlPath;
  }
};
const PrimaryNavTab: FC<IPrimaryNavTabProps> = ({
  menuItem,
  activeNavTab,
  updateActiveNavTab,
  elementPosition,
  primaryUrlPath,
}) => {
  const { path, label, submenu } = menuItem;
  // console.log("hello");

  /* 
  // for accessibility
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
      <NavLink to={path !== undefined ? path : "#"}>
        {({ isActive }) => (
          <PrimaryNavContainer
            // isActive={isActive} // all the 4 links with undefined becomes active
            // isActive={activeNavTab === label && isActive}
            isActive={checkNavActive(primaryUrlPath, path, label)}
            label={label}
            submenu={submenu}
            path={path}
            updateActiveNavTab={updateActiveNavTab}
            elementPosition={elementPosition}
          />
        )}
      </NavLink>
      {/* {path !== undefined ? (
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
      )} */}
    </ListItem>
  );
};

export default PrimaryNavTab;
