/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Make Appointments',
    description: 'Get your users to make appointments at your preferred scheduled slots with our built-in tools',
  },
  {
    id: 2,
    icon: dart,
    title: 'Generate Leads',
    description: 'Get your visitors to turn up with our AI based chatbot. Explore your Customer journey.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Build Sales Funnels',
    description: 'Create interactive sales funnels which helps EASY conversion of website Visitors To esteemed valued Customers.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Get Insights',
    description: `Our AI Data Driven solutions helps every business to know MORE about your Customer Interests to build Robust AI Engineering Systems`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.features">
      <Container>
        {/* <SectionHeading
          sx={styles.heading}
          title="Go Beyond unlimited features"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        /> */}
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

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
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
