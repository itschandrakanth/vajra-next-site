/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb-2.png';
import diamond from 'assets/images/icons/diamond.png';
import help from 'assets/images/icons/help.png';
import award from 'assets/images/icons/award.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: '1. Build',
    description: `Visually build chatbots quickly through an intuitive interface, designed for non-technical people. Conversational marketing made for marketing professionals.`,
  },
  {
    id: 2,
    icon: diamond,
    title: '2. Launch',
    description: `Add a code snippet to your site (like Google Analytics) and launch in less than 5 minutes. Control what it says, when it launches & how it looks.`,
  },
  {
    id: 3,
    icon: help,
    title: '3. Strengthen + Optimise',
    description: `You’ll receive fully transparent analytics, and data that allows you to optimize your bot.`,
  },
  {
    id: 4,
    icon: award,
    title: '4. Easily Train',
    description: `Gather the data you need to train your chatbot and easily leverage top NLP and machine learning platforms to make advanced, intelligent chatbots`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="how-it-works" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="How it Works"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};
