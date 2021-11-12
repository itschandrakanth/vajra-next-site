/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import feedChat from "../../assets/animations/offer-vajra.json";
import VajraChatbot from "../../assets/images/chatbot-showcase.png";
import VajraPricing from 'sections/vajra-pricing';

const OfferBanner = () => {
  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: feedChat,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          {/* <Lottie options={LottieDefaultOptions} /> */}
          <Image src={VajraChatbot} sx={styles.image} />
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Get your Visitors <span sx={styles.spanColor}>Engaged.</span>
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            With our interactive tools and customisations, you can engage your visitors in a way that is unique to your business.
            </Text>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
              <Button variant="primary" sx={styles.button}>
                Try vajra.ai
              </Button>
            </Link>
            
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default OfferBanner;

const styles = {
  spanColor: {
    color: "primary",
  },  
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
