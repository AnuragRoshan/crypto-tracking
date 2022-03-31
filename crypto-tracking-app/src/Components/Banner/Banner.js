import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./bannerbg4.png)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "fle x",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    backgroundColor:"grey"
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
           Trending Today
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              // color: "black",
              textTransform: "capitalize",
              fontWeight:'medium',
          color:'black',
              fontFamily: "Montserrat",
            }}
          >
            Fastest Price Update and Best Crypto News On the Internet
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;


