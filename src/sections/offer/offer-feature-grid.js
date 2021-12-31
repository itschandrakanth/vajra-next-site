/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';
import lead from 'assets/key-feature/lead.png';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Lead Generation',
    title: 'Lead Generation',
    
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Customer Support',
    title: 'Customer Support',
    
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Virtual Assistant',
    title: 'Virtual assistant',
    
  },
  {
    id: 4,
    imgSrc: Editing,
    altText: 'Lead Quality Checker',
    title: 'Lead Quality Checker',
    
  },
  {
    id: 5,
    imgSrc: Vector,
    altText: 'Appointment Bookings',
    title: 'Appointment Bookings',
    
  },
  {
    id: 6,
    imgSrc: Speed,
    altText: 'Sales Generation',
    title: 'Sales Generation',
    
  },
  
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeading
          slogan="Quality features"
          title="vajra.ai bot works as"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    my: '80px',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
