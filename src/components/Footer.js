//modules
import { Grid, Link } from "@mui/material";
//styles
import style from "../styles/Footer.module.css";
//assets
import IconLinked from "../assets/footer/icon-linked.png";
import IconInsta from "../assets/footer/icon-insta.png";

const Footer = () => {
  return (
    <footer>
      <Grid container justifyContent="center">
        <p>Tel : 07.69.81.34.89 | contact@feemareine.com</p>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ backgroundColor: "#f6f5f0", height: "60px" }}
      >
        <Grid>
          <Link className={style.text}>BLOG</Link>
          <Link className={style.text}>A PROPOS</Link>
          <Link className={style.text}>CONTACT</Link>
          <Link className={style.text}>MENTION LEGALES</Link>
        </Grid>
        <Grid>
          <Link>
            <img className={style.icon} src={IconLinked} alt="" />
          </Link>
          <Link>
            <img className={style.icon} src={IconInsta} alt="" />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
