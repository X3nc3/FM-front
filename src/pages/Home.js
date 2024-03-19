//modules
import { Grid } from "@mui/material";
//page section
import TextPresentationPageSection from "./home.page.section/TextePresentation.page.section";
import EventsPageSection from "./home.page.section/Events.page.section";
import MyEngagePageSection from "./home.page.section/MyEngage.page.section";
import WorkAndContactPageSEction from "./home.page.section/WorkAndContact.page.section";
import MyselfPresentationPageSection from "./home.page.section/MyselfPresentation.page.section";

const Home = () => {
  return (
    <Grid container direction="column">
      <TextPresentationPageSection />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e9dccd"
          fill-opacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,234.7C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <EventsPageSection />
      <MyEngagePageSection />
      <WorkAndContactPageSEction />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e9dccd"
          fill-opacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,234.7C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <MyselfPresentationPageSection />
    </Grid>
  );
};

export default Home;
