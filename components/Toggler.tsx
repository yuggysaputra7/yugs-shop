import React, { FC } from "react";
import { Box } from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md";
interface TogglerProps {
  darkMode: boolean;
  handleClick: () => void;
}

const Toggler: FC<TogglerProps> = ({ darkMode = false, handleClick }) => {
  const transition = "all 250ms ease";

  return (
    <Box
      className=" mt-3 lg:mt-6 text-3xl"
      fontSize={"1.5rem"}
      sx={{
        cursor: "pointer",
        ":hover": { transform: "translateY(-3px)", transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          <MdLightMode />
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          <MdDarkMode />
        </span>
      )}
    </Box>
  );
};

export default Toggler;
