/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Image } from 'theme-ui';

const ServiceCard = ({ service }) => {
  return (
    <Box sx={styles.service}>
        <Image src={service.image} width={50} sx={styles.img} />
      <Text as="h2">{service.title}</Text>
      <Text as="span">{service.price}</Text>
      <Text as="p">{service.description}</Text>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  service: {
    border: (theme) => `1px solid #EDEFF6`,
    backgroundColor: ['white'],
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '2rem',
    minHeight: [107, null, null, 130],
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    ':hover': {
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      borderColor: 'transparent',
      backgroundColor: '#8546ff24'
    },
    p: {
      fontWeight: 400,
      fontSize: [1, null, null, '15px'],
      lineHeight: 1.77,
      color: 'heading',
    },
    h2: {
      fontWeight: 700,
      fontSize: [1, null, null, '21px'],
      lineHeight: 1.77,
      color: 'heading',
    },
    span: {
      color: '#3183FF',
      fontWeight: 700,
      fontSize: [1, null, null, '21px'],
    },
    img: {
        mx: '10px',
        margin: '1rem',
    }
  },
};
