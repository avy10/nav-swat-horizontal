import { useState, FC, MouseEvent, useRef } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";
import { ISubMenuItem } from "../models";
import TertiaryNav from "./TertiaryNav";
import MenuBoxPaper from "../common/MenuBoxPaper";
import { MenuItem } from "@mui/material";
interface ISecondaryNavTabProps {
  subItem: ISubMenuItem;
  active: boolean;
  handleKeyDown: (e: KeyboardEvent) => void;
  elementIndex: number;
  updateActiveNavTab: (path: string) => void;
  path?: string;
  primaryLabel: string;
  updateShowSubMenu: (newValue: boolean) => void;
  subItemPath?: string;
}
const SecondaryNavTab: FC<ISecondaryNavTabProps> = ({
  subItem,
  active,
  handleKeyDown,
  elementIndex,
  updateActiveNavTab,
  primaryLabel,
  updateShowSubMenu,
  subItemPath,
}) => {
  const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const secondaryNavBox = useRef();
  const handleHover = (event: MouseEvent<HTMLElement>) => {
    setShowLevelTwoMenu(true);
    if (event.currentTarget !== anchorEl) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleLeave = () => {
    setShowLevelTwoMenu(false);
    setAnchorEl(null);
  };
  const handleClick = () => {
    if (!subItemPath) return;
    updateActiveNavTab(subItemPath);
    updateShowSubMenu(false);
    /*   // needed to update the updateActiveNavTab, else it will not have active properties when we visit it's submenu
    if (
      primaryLabel === "Dashboards" ||
      primaryLabel === "Admin" ||
      primaryLabel === "Support" ||
      primaryLabel === "Reports"
    ) {
      updateActiveNavTab(primaryLabel);
      updateShowSubMenu(false);
    } */
  };

  /*   const handleKeyPress = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      setShowLevelTwoMenu((prev) => !prev);
    } else if (e.key === "Escape") {
      setShowLevelTwoMenu(false);
    }
  }; */

  return (
    <Box
      role="menuitem"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={showLevelTwoMenu}
      aria-label={`${subItem.label}`}
      onMouseOver={handleHover}
      ref={secondaryNavBox}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      //   onKeyDown={handleKeyDown}
      //   onKeyPress={handleKeyPress}
      sx={{
        position: "relative",
        background: "#f4f6f9",
        color: "#000000",
        maxHeight: "72px",
        width: "218px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          padding: "8px 10px 8px 20px",
          borderBottom: "1px solid #b5b5b5",
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "flex-start",
          alignItems: "middle",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <span>{subItem.label}</span>
        {(subItem.label === "Administration" || subItem.label === "Effect") && (
          <span>
            {anchorEl ? (
              <ArrowDropDownIcon
                sx={{
                  // color: "#09436d",
                  color: "white",
                  fontSize: "16px",
                  backgroundColor: showLevelTwoMenu ? "#09436d" : "black",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <ArrowRightIcon
                sx={{
                  // color: "#09436d",
                  color: "white",
                  padding: 0,
                  fontSize: "16px",
                  backgroundColor: showLevelTwoMenu ? "#09436d" : "black",
                  borderRadius: "50%",
                }}
              />
            )}
          </span>
        )}
      </Typography>
      {showLevelTwoMenu && subItem.submenu && (
        <TertiaryNav
          submenu={subItem.submenu}
          setShowLevelTwoMenu={setShowLevelTwoMenu}
          elementIndex={elementIndex}
          secondaryNavBoxRef={secondaryNavBox}
        />
      )}
      {/* MenuList on Popper */}
      {/*  {showLevelTwoMenu && subItem.submenu && (
        <MenuBoxPaper
          open={showLevelTwoMenu}
          anchorEl={anchorEl}
          clearAnchorEl={handleLeave}
          placementValue="right-start"
        >
          {subItem.submenu.map((nestedItem, index) => (
            <MenuItem
              key={index}
              sx={{
                padding: 0,
                borderBottom: "1px solid #b5b5b5",
                margin: 0,
              }}
            >
              {nestedItem.label}
            </MenuItem>
          ))}
        </MenuBoxPaper>
      )} */}
      {/* MUI Menu */}
      {/* {showLevelTwoMenu && subItem.submenu && (
				<MenuBox anchorEl={anchorEl} clearAnchorEl={handleLeave}>
					{subItem.submenu.map((nestedItem, index) => (
						<MenuItem
							key={index}
							sx={{
								padding: 0,
								borderBottom: "1px solid #b5b5b5",
								margin: 0,
							}}
						>
							{nestedItem.label}
						</MenuItem>
					))}
				</MenuBox>
			)} */}
    </Box>
  );
};
export default SecondaryNavTab;
