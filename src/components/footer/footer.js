/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import Link from 'next/link'
import isoImage from '../../assets/images/ISO_Certified_Vajra.png'

export default function Footer() {
  return (
    <div>
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '350px', marginBottom: '20px', marginTop: '20px'}}>
        <div className="items-center">
          <img src={isoImage} />
        </div>
      </div>
    <Box as="footer" variant="layout.footer">
      {/* <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container> */}
      <Container>
        

        
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">
              &nbsp; &copy; {new Date().getFullYear()}
            </Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link href={path}>
                  {label}
                </Link>  
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
    </div>
      
  );
}

const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
    },
  },
};
