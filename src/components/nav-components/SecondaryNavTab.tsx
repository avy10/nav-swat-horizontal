import { useState, FC, MouseEvent } from "react";
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
}
const SecondaryNavTab: FC<ISecondaryNavTabProps> = ({
  subItem,
  active,
  handleKeyDown,
  elementIndex,
  updateActiveNavTab,
  primaryLabel,
  updateShowSubMenu,
}) => {
  const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
    // needed to update the updateActiveNavTab, else it will not have active properties when we visit it's submenu
    if (
      primaryLabel === "Dashboards" ||
      primaryLabel === "Admin" ||
      primaryLabel === "Support" ||
      primaryLabel === "Reports"
    ) {
      updateActiveNavTab(primaryLabel);
      updateShowSubMenu(false);
    }
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
      onMouseLeave={handleLeave}
      onClick={handleClick}
      //   onKeyDown={handleKeyDown}
      //   onKeyPress={handleKeyPress}
      sx={{
        position: "relative",
        background: "#f4f6f9",
        color: "#000000",
        maxHeight: "72px",
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
          alignItems: "flex-start",
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
                  color: "#09436d",
                  fontSize: "16px",
                  border: "1px solid red",
                }}
              />
            ) : (
              <ArrowRightIcon
                sx={{
                  color: "#09436d",
                  fontSize: "16px",
                  border: "1px solid red",
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
