// import { useState, FC, ReactElement, MouseEvent } from "react";
import { useState, FC } from "react";
import { Box } from "@mui/material";
import PrimaryNavTextBox from "./PrimaryNavTextBox";
import { ISubMenuItem } from "../../models";
import SecondaryNav from "../SecondaryNav";

interface IPrimaryNavContainerProps {
  isActive: boolean;
  label: string;
  path?: string;
  updateActiveNavTab: (path: string) => void;
  submenu: ISubMenuItem[] | undefined;
}

const PrimaryNavContainer: FC<IPrimaryNavContainerProps> = ({
  isActive,
  label,
  updateActiveNavTab,
  submenu,
  path = undefined,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  function updateShowSubMenu(newValue: boolean) {
    setShowSubMenu(newValue);
  }
  const handleHover = () => updateShowSubMenu(true);
  const handleLeave = () => updateShowSubMenu(false);
  const handleClick = () => {
    if (path !== undefined) {
      updateActiveNavTab(label);
      updateShowSubMenu(false);
    }
  };
  return (
    <Box
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      sx={{
        background: isActive
          ? "white"
          : label === "COOP" && !isActive
          ? "#BF470E"
          : "#09436d",
        color: isActive ? (label === "COOP" ? "#a96701" : "#09436d") : "white",
        height: "35px",
        // position: "relative",
        borderRight: "1px solid #295b80",
        borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
        cursor: "pointer",
        "&:hover": {
          color: isActive
            ? label === "COOP"
              ? "#a96701"
              : "#09436d"
            : "white",
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
          background: label === "COOP" && !isActive ? "#8f2d2d" : "#04284a",
          height: "100%",
          transition: "height .2s",
          opacity: label === "COOP" && !isActive ? "0.8" : isActive ? "0" : "1",
        },
      }}
    >
      <PrimaryNavTextBox label={label} />

      {showSubMenu && submenu && (
        <SecondaryNav
          updateActiveNavTab={updateActiveNavTab}
          submenu={submenu}
          updateShowSubMenu={updateShowSubMenu}
          primaryLabel={label} // 5. passing on the primaryLabel so we could set to activeTab once its Nested menu is clicked
        />
      )}
    </Box>
  );
};

export default PrimaryNavContainer;
