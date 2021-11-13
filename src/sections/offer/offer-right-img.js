/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import brands from "../../assets/animations/brands.json";
import VajraChatbot from "../../assets/images/chatbot-showcase.png";
import VajraPricing from 'sections/vajra-pricing';

const OfferRightImg = () => {
  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: brands,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          {/* <Lottie options={LottieDefaultOptions} /> */}
          
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            100+ Brands already using <span sx={styles.spanColor}>vajra.ai</span> platform
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            Leverage your business with the best in class AI chatbot that increases your sales and customer engagement.
            </Text>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
              <a href="#request">
                <Button variant="primary" sx={styles.button}>
                    Request a Demo
                </Button>
              </a>
              
            </Link>
            
          </Box>
          <Lottie options={LottieDefaultOptions} />
          
        </Box>
      </Container>
    </Box>
  );
};

export default OfferRightImg;

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
