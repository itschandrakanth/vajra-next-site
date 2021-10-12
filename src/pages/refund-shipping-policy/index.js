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
                        <div class="container md:px-44 lg:px-44 py-24 mx-auto">
                            <Heading sx={styles.title}>
                                    Refund Policy
                            </Heading>
                            <div class="divide-y-2 divide-gray-100">
                            <div class="py-20 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <p>You can cancel accounts three business days before your next billing date to avoid unwanted charges. If you wish to cancel and go for a refund, we have a 14-day refund policy.  The billing is done in advance on a monthly or yearly basis (depending on your selected billing preference). While downgrade requests can be submitted, they will not take effect until the preferred plan term is complete. Cancellation will take effect immediately and accounts are not recoverable. </p>  
                                                      
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="container md:px-44 lg:px-44 py-5 mx-auto">
                            <Heading sx={styles.title}>
                                Shipping Policy
                            </Heading>
                            <div class="divide-y-2 divide-gray-100">
                            <div class="py-20 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <p>We consider digitally delivered goods to be information or content that you can download from our website or receive by email. Delivery means the digital download of subscribed content to the customers. At present we have only one mode of delivery - a subscription plan for accessing chatbots. Online digital delivery of content is through the internet, i.e., downloading the subscribed content from the www.vajra.ai website.</p>  
                                    &nbsp;&nbsp;&nbsp;&nbsp;  
                                    &nbsp;&nbsp;&nbsp;&nbsp; 
                                    <br></br><br></br>
                                    <strong>Last Update: </strong>12-10-2021
                                    &nbsp;&nbsp;&nbsp;&nbsp;                          
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
