/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import banner from 'assets/images/bot-banner.jpg';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import animationData from "../assets/animations/bot-3d.json";

const Banner = () => {
  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Build & Deploy a Custom Chatbot on your Website or App in just 20 minutes.
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            Our Expert Team Technology innovations in Artificial Intelligence Helps your business to generate 200% Increase in LEADS and Double your SALES with our VajraX Business solutions.
            </Text>
            {/* <Link
                activeClass="active"
                to="form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
              <Button variant="primary" sx={styles.button}>
                Start Free Trial
              </Button>
            </Link> */}
            
            {/* <Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box> */}
          </Box>
          {/* <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box> */}
          <Lottie options={LottieDefaultOptions} />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '30px', '30px', '35px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
