/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import ServiceCard from 'components/service-card';
import ai from 'assets/images/artificial-intelligence.png'

const services = [
  {
    title: 'Human like  ',
    price: 'AI chatbot',
    image: ai
  },
  {
    title: 'AI Feedchat',
    price: 'Forms',
  },
  {
    title: 'AI integrated',
    price: 'Visitor Management',
  },
  {
    title: ' Create AI powered',
    price: 'Business cards',
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section} variant="section.features">
      <Container>
        <SectionHeading
          slogan=""
          title="Experience our vajra AI platform for"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: ['70px', null, null, null, '100px', null, '140px'],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
