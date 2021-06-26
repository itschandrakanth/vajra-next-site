/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import { Fragment } from 'react';

const data = [
  {
    id: 1,
    color: '#28D1DC',
    value: '24x7',
    title: 'Availability',
  },
  {
    id: 2,
    color: '#FF753A',
    value: 'No',
    title: 'Human Errors',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '0',
    title: 'Waiting Time',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: 'High',
    title: 'Conversion Rate',
  },
];

const data2 = [
  {
    id: 1,
    color: '#28D1DC',
    value: '⬆',
    title: 'Messaging',
  },
  {
    id: 2,
    color: '#FF753A',
    value: 'Better',
    title: 'Marketing ROI',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '✈',
    title: 'Automation',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: '⬆',
    title: 'Lead Value',
  },
];

const Features = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Why Your Business needs Vajra"
          description="As customers talk to Vajra, it gathers information about your website and product, then aggregates this information to provide insights."
        />
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.leftContent}>
            {data2?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          {/* <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  An AIaS platform
                </Fragment>
              }
              description="With VajraAI all you can build Business AI Solutions with ease. Our Ready to use AI suites will help all the business around the globe"
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Build and deploy AI projects,
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Create, manage & Analyse AI products
            </Text>
            <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px'],
      },
      ':last-of-type': {
        mt: ['-65px'],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'center',
    mb: ['20px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'flex'],
      },
    },
    p: {
      mt: ['15px', '10px'],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
