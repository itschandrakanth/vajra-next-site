import {Box, Container, Heading} from 'theme-ui';
import Lottie from "react-lottie";

import animationData from "../assets/animations/404_fall.json";

const Page404 = () => {
    const LottieDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      return (
          <Box>
              <Container sx={styles.container}>
                <Lottie options={LottieDefaultOptions} height={400} width={700} /><br />
                <h1>Not Found</h1>  
            </Container>
          </Box>
      )
}

export default Page404;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        alignItems: 'center'
    },
}