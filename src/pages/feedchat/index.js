import FeedChat from "sections/feedchat/feedchat";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';


function FeedChatMain() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="Vajra.ai FeedChat" /> 
                <FeedChat />
            </Layout>
        </ThemeProvider>
    )
}

export default FeedChatMain
