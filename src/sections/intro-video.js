/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import { LearnMore } from 'components/link';
// import videoBanner from 'assets/images/video.png';
import videoThumb from 'assets/images/video-thumb.png';
import Play from 'assets/images/play-button.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';
import Link from 'next/link'

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title=""
          description=""
        />
        <Box sx={styles.explore}>
          {/* <LearnMore path="#!" label="Explore More" /> */}
        </Box>
        <Box sx={styles.videoWrapper}>
          <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://player.vimeo.com/video/689254974?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal>

          <Image
            src={videoThumb}
            className="video-banner"
            alt="video banner"
          />
          <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Image src={Play} alt="play" width="50" /> Watch Full video
          </Button>
        </Box>
        <div class="flex justify-center mt-10">
                <Link href="https://vajra.ai/offer#request">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Request Demo</button>
                </Link>
                <Link href="https://app.vajra.ai/?utm_source=vajra-page">
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                </Link>
            </div>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
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
    color: 'gray',
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
