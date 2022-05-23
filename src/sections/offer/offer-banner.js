/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import feedChat from "../../assets/animations/offer-vajra.json";
import Link from 'next/link'


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
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Automate <span sx={styles.spanColor}>Lead </span>Generation and Customer <span sx={styles.spanColor}>Service</span> in no time with our Vajra Bot 
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            Get 5X increase in your Sales & Customer Engagement with our 24/7 AI Live Chatbot <br />- No Coding skills Required
            </Text>
            {/* <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > */}
              {/* <Button variant="primary" sx={styles.button} id="open-vajra">
                See Vajra Bot in action
              </Button> */}
              {/* <Button variant="primary" sx={styles.button} id="open-vajra">
                Request Demo
              </Button> */}
            {/* </Link> */}
            <div class="flex mt-10">
                <Link href="https://meetings.hubspot.com/vajra-connect">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Request Demo</button>
                </Link>
                <Link href="https://app.vajra.ai/?utm_source=vajra-page">
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                </Link>
        </div>
          </Box>
          <Lottie options={LottieDefaultOptions} />
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
    display: ['flex'],
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
