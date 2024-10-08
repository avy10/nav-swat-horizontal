import styles from "./OfficeSelections.module.css";
import { Box } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the user interface for typing
interface User {
  id: number;
  name: string;
}

const OfficeSelections: React.FC = () => {
  const [officeIndex, setOfficeIndex] = useState<number>(10);
  const [users, setUsers] = useState<User[]>([]); // Users array of User type

  // Function to fetch users from API
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

  return (
    <Box
      className={styles.selection}
      sx={{ minWidth: 220, marginRight: "5px" }}
    >
      <span>Select Office</span>
      <NativeSelect
        defaultValue={officeIndex}
        onChange={(e) => setOfficeIndex(Number(e.target.value))}
        inputProps={{
          name: "officeName",
        }}
        sx={{
          color: "black",
          fontSize: "14px",
          border: "none",

          "& .MuiNativeSelect-select": {
            padding: "0px",
          },
          "& option": {
            width: "195px",
            "&:hover": {
              backgroundColor: "#f4f4f4",
            },
          },
          "& .MuiNativeSelect-select option": {
            width: "195px",
            "&:hover": {
              backgroundColor: "aqua",
            },
          },
        }}
      >
        {users.map((singleUserData) => (
          <option value={singleUserData.id} key={singleUserData.id}>
            {singleUserData.name}
          </option>
        ))}
        {users.map((singleUserData) => (
          <option value={singleUserData.id} key={singleUserData.id}>
            {singleUserData.name}
          </option>
        ))}
        {users.map((singleUserData) => (
          <option value={singleUserData.id} key={singleUserData.id}>
            {singleUserData.name}
          </option>
        ))}
      </NativeSelect>
    </Box>
  );
};

export default OfficeSelections;
/* 
import styles from "./OfficeSelections.module.css";
import { Box } from "@mui/material";
// import NativeSelect from "@mui/material/NativeSelect";
import { useEffect, useState, MouseEvent } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
// Define the user interface for typing
interface User {
  id: number;
  name: string;
}

const OfficeSelections: React.FC = () => {
  const [officeIndex, setOfficeIndex] = useState<number>(10);
  const [users, setUsers] = useState<User[]>([]); // Users array of User type
  function updateOfficeIndex(newValue: number) {
    setOfficeIndex(newValue);
  }
  // Function to fetch users from API
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
            backgroundColor: "white",
            color: "black",
            width: "210px",
            padding: 0,
            margin: 0,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            padding: 0,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            width: "210px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={styles.selection}
        sx={{ minWidth: 220, marginRight: "5px" }}
      >
        <span>Select Office</span>
        <Select
          value={officeIndex}
          onChange={(event: MouseEvent<HTMLElement>) =>
            updateOfficeIndex(Number(event.target.value))
          }
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "195px",
            height: "24px",
            padding: 0,
            margin: 0,
            fontSize: "14px",
            border: "none",
            borderRadius: 0,
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                padding: 0,
              },
            },
          }}
        >
          {users.map((singleUserData) => (
            <MenuItem value={singleUserData.id} key={singleUserData.id}>
              {singleUserData.name} {singleUserData.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </ThemeProvider>
  );
};

export default OfficeSelections;


*/
