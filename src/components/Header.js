import React from "react";
import Logo from "../assets/logo.png.png";
import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        xs={12}
        style={{ backgroundColor: "#f6f5f0" }}
      >
        <Grid
          style={{
            textAlign: "center",
            marginLeft: "100px",
            fontSize: "20px",
            color: "#927e6c",
          }}
        >
          VOTRE WEDDING <br /> PLANNER & DESIGNER <br /> EN ILE-DE-FRANCE
        </Grid>
        <Grid>
          <img src={Logo} alt="" style={{ height: "250px" }} />
        </Grid>
        <Grid
          style={{
            textAlign: "center",
            marginRight: "150px",
            fontSize: "25px",
            color: "#927e6c",
          }}
        >
          let's plan <br /> <span>YOUR EVENT</span>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
