/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import { LearnMore } from 'components/link';
import videoBanner from 'assets/images/video.png';
import dashboardImage from 'assets/images/dashboard-vajra3.png';
import clicksImage from 'assets/images/clicks.png';
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const OfferHeading = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={styles.section} variant="section.features" style={{ marginBottom: "-50px", paddingBottom: "40px"}}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="One Platform - Multiple Use Cases"
          description="Get precise leads with our AI platform that works everytime even while you Sleep"
        />
        
        <Box sx={styles.videoWrapper}>
          {/* <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://player.vimeo.com/video/394343710?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal> */}

          {/* <Image
            src={clicksImage}
            className="video-banner"
            alt="video banner"
          /> */}
          {/* <br /><br />
          <p>This chart will offer you with indepth analysis of bot tiggers and corresponding interactions .Helps you to better understand user behaviour over different time frames. </p>
<p className="text-2xl">More interactions means Higher Conversion Rate.</p> */}
          {/* <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Image src={Play} alt="play" /> Watch Full video
          </Button> */}
        </Box>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4 ">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-red-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">AI Chatbots For Your Websites/Apps  </h2>
          <p class="leading-relaxed text-base">Bring the advanced bot to your website and generate 3x leads</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-blue-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">WhatsApp Business Services</h2>
          <p class="leading-relaxed text-base">Say No to Email - Send Notifications directly to your customers</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-indigo-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">SmartURL For Paid Ads ROI tracking</h2>
          <p class="leading-relaxed text-base">Track your paid ads with Smart URL Builder</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Dynamic CRM</h2>
          <p class="leading-relaxed text-base">Analyse and Organise your Customer Relationships</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-pink-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Profile cards(Alternate to websites)</h2>
          <p class="leading-relaxed text-base">Show your Identity with ONE card - Profile Cards</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-yellow-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Lead Funnels</h2>
          <p class="leading-relaxed text-base">Lead Funnel lets you track the user journey and lead conversions</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-red-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">AI-Enabled Review System</h2>
          <p class="leading-relaxed text-base">Understand AI driven insights through Advanced Engine. </p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">AI Recommendations</h2>
          <p class="leading-relaxed text-base">Get Customised user's feedback about your Business</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg hover:bg-blue-50 hover:transition-colors duration-200 ease-in-out">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Lead Management</h2>
          <p class="leading-relaxed text-base">Manage your Leads with advanced filtering techniques</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <a href="#request">
        <button class="mt-12 text-white bg-indigo-500 border-0 mx-2 my-2 p-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Request Demo</button>
      </a>
      <a href="https://app.vajra.ai?utm_source=vajra-offer-page" target="_blank">
        <button class="mt-12 text-white bg-indigo-500 border-0 mx-2 my-2 p-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try for Free</button>
      </a>
      
    </div>
  
  </div>
</section>
        {/* <Box sx={styles.explore}>
          <LearnMore path="https://app.vajra.ai" label="Login to Dashboard" />
        </Box> */}
      </Container>
    </Box>
  );
};

export default OfferHeading;

const styles = {
  heading: {
    maxWidth: '720px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};
