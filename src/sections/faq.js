/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import noCode from '../assets/images/coding.png';
import easy from '../assets/images/easy.png';
import fast from '../assets/images/fast.png';
import customerExperience from '../assets/images/customer-experience.png';
import scalable from '../assets/images/scalable.png';
import liveAgent from '../assets/images/live-agent.png';
import Link from 'next/link'
const faqs = [
  {
    title: 'Ready to use No Code Platform',
    contents: (
      <div className="sm:flex ">
        <div className="sm:hidden md:block w-1/4">
          <img src={noCode} width="100px" />
        </div>
        <div className="w-3/4">
        vajra.ai is platform that uses a visual development interface to enable non-technical users to build applications by dragging and dropping software applications to create a full app.
        </div>
      </div>
    ),
  },
  {
    title: 'Fast ',
    contents: (
    <div className="sm:flex ">
      <div className="sm:hidden md:block w-1/4">
        <img src={fast} width="100px" />
      </div>
      <div className="w-3/4">
      We can build a solution faster than anyone else. After just a few days, the virtual agent is operational and ready for testing. We include a report on expected resolution rate and potential cost savings.
      </div>
    </div>
    ),
  },
  {
    title: `Easy`,
    contents: (
    <div className="sm:flex ">
      <div className="sm:hidden md:block w-1/4">
        <img src={easy} width="100px" />
      </div>
      <div className="w-3/4">
      Our intuitive no-code conversational AI platform empowers frontline teams to automate customer service without tech support. Because with vajra.ai, you don’t need developers to automate.
      </div>
    </div>
    ),
  },
  {
    title: `Scalable`,
    contents: (
    <div className="sm:flex ">
      <div className="sm:hidden md:block w-1/4">
        <img src={scalable} width="100px" />
      </div>
      <div className="w-3/4">
      If a virtual agent can’t understand, it won’t be able to help. It’s why NLU is so crucial for successful automation. Our market-leading NLU gives our virtual agents consistent resolution rates of over 90% - in any language.
      </div>
    </div>
    ),
  },
  {
    title: `Better customer experience`,
    contents: (
      <div className="sm:flex ">
      <div className="sm:hidden md:block w-1/4">
        <img src={customerExperience} width="100px" />
      </div>
      <div className="w-3/4">
      Direct messaging is the preferred channel for interactions because of its speed and simplicity. This is particularly true for Millennials and younger generations.
      </div>
    </div>
    ),
  },
  {
    title: `Live agent `,
    contents: (
    <div className="sm:flex ">
      <div className="sm:hidden md:block w-1/4">
        <img src={liveAgent} width="100px" />
      </div>
      <div className="w-3/4">
      Our platform enables agents & virtual assistants to work hand-in-hand, offering recommendations, validating predictions & making each other better with every conversation.
      </div>
    </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Vajra.ai is the best solution for your business"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '1020px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
        <div class="flex justify-center mt-10">
                <Link href="/request-demo">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Request Demo</button>
                </Link>
                <Link href="https://app.vajra.ai/?utm_source=vajra-page">
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                </Link>
            </div>
      </Container>
    </Box>
  );
}
