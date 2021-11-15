/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import feedChat from "../../assets/animations/feedchat2.json";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';


const FeedChat = () => {
  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: feedChat,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <ThemeProvider theme={theme}>
    <Layout>
        <SEO title="Social Prachar FeedChat - vajra.ai" /> 
        <Box id="home" as="section" variant="section.banner">
            <Container>
                <Box sx={styles.contentWrapper}>
                  <div id="open-vajra">
                    <a href = "#">
                      <Button variant="secondarySm" sx={styles.explore}>Open Social Prachar FeedChat</Button>
                    </a>
                  </div>
                  
                </Box>
            </Container>
        </Box>
    </Layout>
    </ThemeProvider>
    
  );
};

export default FeedChat;

const styles = {
  spanColor: {
    color: "primary",
  },  
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    // gridTemplateColumns: 'repeat(1, 1fr)',
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
  explore: {
    display: ['block', 'block', 'block', 'block'],
    borderRadius: 20,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 20,
    // position: 'absolute',
    // bottom: 40,
    // left: 20,
    justifyContent: 'justify-end',
    outline: '0 !important'
  },
};
