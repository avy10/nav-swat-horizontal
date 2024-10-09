import styles from "./OfficeSelections.module.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

interface User {
  id: number;
  name: string;
}

const OfficeSelections: React.FC = () => {
  const [officeIndex, setOfficeIndex] = useState<number | string>(
    "--Select Office--"
  );
  const [users, setUsers] = useState<User[]>([]);

  function updateOfficeIndex(newValue: number) {
    setOfficeIndex(newValue);
  }

  async function getUsers() {
    try {
      const response = await axios.get<User[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (error) {
      console.log("error in data fetch", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#333",
            padding: 0,
            width: "210px",
            height: "25px",
            backgroundColor: "white",
            marginRight: "5px",
            border: "none",
            borderRadius: "0px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            padding: "5px 5px",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: "#333",

            fontSize: "14px",
            fontFamily: "Arial, Helvetica, sans-serif",
            paddingLeft: "5px",
            paddingTop: 2,
            paddingBottom: 2,
            "&:hover": {
              backgroundColor: "#7c7c7c",
              color: "white",
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            minWidth: "210px",
            maxHeight: "500px",
            /* overflowY: "auto",
            "&::-webkit-scrollbar": {
              height: "10px",
              width: "8px",
              borderRadius: "25px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
              boxShadow: "inset 0 0 5px white", //scrollbar track
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#7c7c7c",
              borderRadius: "30px",
              border: "1px solid transparent",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#bbb",
            }, */
          },
        },
      },
    },
  });
  const menuProps = {
    PaperProps: {
      style: {
        marginTop: 5,
        marginLeft: "10px",
        width: "250px",
        padding: 0,
        borderRadius: "0",
        // border: "2px solid red",
      },
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.selection}>
        <span>Select Office</span>
        <Select
          value={officeIndex}
          onChange={(event) => updateOfficeIndex(Number(event.target.value))}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={menuProps}
        >
          <MenuItem value={"--Select Office--"} disabled>
            --Select Office--
          </MenuItem>
          {users.map((singleUserData) => (
            <MenuItem value={singleUserData.id} key={singleUserData.id}>
              {singleUserData.name}
            </MenuItem>
          ))}
          {users.map((singleUserData) => (
            <MenuItem
              value={singleUserData.id + 10}
              key={singleUserData.id + "A"}
            >
              {singleUserData.name} AA
            </MenuItem>
          ))}
        </Select>
      </Box>
    </ThemeProvider>
  );
};

export default OfficeSelections;
