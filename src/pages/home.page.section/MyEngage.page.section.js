//modules
import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
//styles
import style from "../../styles/home.page.section/MyEngagePageSection.module.css";

const MyEngagePageSection = () => {
  return (
    <Grid container direction="column">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={style.iconEngage}
      >
        <Grid className={style.ligne}></Grid>
        <Typography variant="h5" style={{ color: "#927e6c" }}>
          Mes engagements
        </Typography>
        <Grid className={style.ligne}></Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={3}
          style={{ margin: "20px" }}
        >
          <FontAwesomeIcon icon={faLightbulb} color="#927e6c" size="4x" />
          <Typography
            variant="h7"
            style={{ color: "#e9dccd", marginTop: "10px" }}
          >
            C R E A T I V I T E
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={3}
          style={{ margin: "20px" }}
        >
          <FontAwesomeIcon icon={faHeart} color="#927e6c" size="4x" />
          <Typography
            variant="h7"
            style={{ color: "#e9dccd", marginTop: "10px" }}
          >
            B I E N V E I L L A N C E
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={3}
          style={{ margin: "20px" }}
        >
          <FontAwesomeIcon icon={faEye} color="#927e6c" size="4x" />
          <Typography
            variant="h7"
            style={{ color: "#e9dccd", marginTop: "10px" }}
          >
            S E N S D U D E T A I L
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyEngagePageSection;
