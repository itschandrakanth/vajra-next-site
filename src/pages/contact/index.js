import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Heading } from '@theme-ui/components';

function index() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="Vajra.ai" />
                <section class="text-gray-600 body-font overflow-hidden p-20">
                        <div class="container md:px-44 lg:px-44 py-40 mx-auto">
                            <Heading sx={styles.title}>
                                    Contact us
                            </Heading>
                            <div class="divide-y-2 divide-gray-100">
                            <div class="py-20 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <p>
                                        <strong>Corporate Address</strong>
                                    </p>
                                    <p>#508, Vajra.ai, Manjeera Majestic Commercial JNTU Rd, <br></br> Beside Manjeera Mall, KPHB, Kukatpally, Hyderabad <br></br>Telangana, India 500072 
                                    <br></br><br></br>
                                    <strong>Phone: </strong>+91 8019 479 419<br></br>
                                    <strong>Email: </strong>support@vajra.ai
                                    </p>  
                                                      
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        </section>
            </Layout>
    </ThemeProvider>
  );
        
            
 
}

export default index

const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: ['30px', null, null, null, '30px', '30px', '35px'],
        lineHeight: 1.33,
        letterSpacing: '-1px',
        color: 'textSecondary',
      },
}
