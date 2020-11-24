import { Box } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from "./Banner.module.css";

const Banner = () => {


  return (

    <Box className={classes.mainWrapper}>
      <Carousel>
        <div>
          <img src="https://i.imgur.com/96OnkX7.png" alt="HM" />
        </div>
        <div>
          <img src="https://i.imgur.com/KtGxwnN.png" alt="US POLO" />
        </div>
        <div>
          <img src="https://i.imgur.com/sfjg9R8.png" alt="Wonder" />
        </div>
      </Carousel>
    </Box>
  )
}

export default Banner;