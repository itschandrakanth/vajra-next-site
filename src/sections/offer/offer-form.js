/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import feedChat from "../../assets/animations/offer-vajra.json";
import contact from "../../assets/animations/contact.json";
import { useState } from 'react';
import SectionHeading from 'components/section-heading';
import whatsappLogo from '../../assets/images/whatsapp.png';
import calendlyLogo from '../../assets/images/calendly.png';

const OfferForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [homepage, setHomepage] = useState('')
    const [usedBot, setUsedBot] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [message, setMessage] = useState('')
    const [businessCategory, setBusinessCategory] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [timestamp, setTimestamp] = useState(new Date().toDateString() + " " + new Date().toLocaleTimeString())

    // function handleInputChanged(e) {
    //   setTimestamp(new Date());
    // }

    async function handleOnSubmit(e) {
      e.preventDefault();
      // const timestamp = new Date();
      // console.log(timestamp)

      const formData = {
          name,
          email,
          phone,
          homepage,
          usedBot,
          businessName,
          message,
          businessCategory,
          timestamp
      };
      // console.log("ELEMENTS",e.currentTarget.elements)
      Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value
          
      });
      fetch('../api/sheetlanding', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response Succeeded')
              setSubmitted(true)
              setName('')
              setEmail('')
              setPhone('')
              setHomepage('')
              setUsedBot('')
              setBusinessName('')
              setMessage('')
              setBusinessCategory('')
              setTimestamp(new Date())
          }
      });

      setSubmitted(true)
      
      
  }

  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Box id="request" as="section" variant="section.features">
      <Container>
        <Heading sx={styles.badaTitle}>
            Try All our AI products at just <span sx={styles.spanColor}>1 rupee</span> for first month. 
        </Heading>
        <p classNameName="text-2xl text-center p-2">Get access to all the features</p>
        <Box sx={styles.contentWrapper}>
        
          <Box sx={styles.content}>
            <Lottie options={LottieDefaultOptions} />
            {/* <Heading sx={styles.title}>
            Try All our AI products at just <span sx={styles.spanColor}>1 rupee</span> for first month. 
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            24/7 Human-like AI chatbot. Get access to all the features.
            </Text> */}
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                <a href="https://api.whatsapp.com/send?phone=918919185995">
                  <button className="bg-green-200 hover:bg-green-500 hover:text-white inline-flex py-3 px-10 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <img src={whatsappLogo} alt="whatsapp" classNameName="w-6 h-6" />
                    <span className="ml-4 flex items-left flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">For Quick Support</span>
                      <span className="title-font font-medium">Whatsapp Now</span>
                    </span>
                  </button>
                </a>
                
                <a href="https://calendly.com/vajra-ai/15min" target="_blank">
                  <button className="bg-blue-200 hover:bg-blue-400 hover:text-white inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <img src={calendlyLogo} alt="whatsapp" classNameName="w-8 h-8" />
                    <span className="ml-4 flex items-left flex-col leading-none">
                      <span className="-ml-2 text-xs text-gray-600 mb-1">For 1-1 session</span>
                      <span className="-ml-2 title-font font-medium">Book on Calendly</span>
                    </span>
                  </button>
                </a>
                
              </div>
            <Link
                activeclassName="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
              {/* <Button variant="primary" sx={styles.button}>
                See in action
              </Button> */}
            </Link>
            
          </Box>
          
          <div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Take the first step to benefit your business</p>
                <form onSubmit={handleOnSubmit}>
                  <div classNameName="flex flex-wrap -m-2">
                              <div classNameName="p-2 w-full">
                              <div classNameName="relative">
                                  <label htmlFor="name" classNameName="leading-7 text-sm text-gray-600">Name*</label>
                                  <input type="text" id="name" name="name" required classNameName="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div classNameName="p-2 w-full">
                              <div classNameName="relative">
                                  <label htmlFor="email" classNameName="leading-7 text-sm text-gray-600">Email*</label>
                                  <input type="email" id="email" name="email" required classNameName="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div classNameName="p-2 w-1/2">
                              <div classNameName="relative">
                                  <label htmlFor="phone" classNameName="leading-7 text-sm text-gray-600">Phone*</label>
                                  <input type="tel" id="phone" name="phone" required classNameName="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div classNameName="p-2 w-1/2">
                              <div classNameName="relative">
                                  <label htmlFor="homepage" classNameName="leading-7 text-sm text-gray-600">Website Url</label>
                                  <input type="url" id="url" name="homepage" classNameName="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              
                              <div classNameName="p-2 w-full">
                              <div classNameName="relative">
                                  {/* <input type="time" name="timestamp" value={handleInputChanged} hidden/> */}
                              </div>
                              {/* <button classNameName="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Grab Offer</button> */}
                              </div>
                              {/* {submitted && 
                                  <div className="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg content-center" role="alert">
                                  <p className="font-bold">Success</p>
                                  <p>Form has been submitted successfully. One of our friendly team will contact you soon</p>
                                </div>
                              } */}
                              <button  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Let me in!</button>
                          </div>
                          
                </form>
                {submitted && 
                                <div className="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg content-center" role="alert">
                                <p className="font-bold">Success</p>
                                <p>Form has been submitted successfully. One of our friendly team will contact you soon</p>
                              </div>
                }
                        
               
                    </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default OfferForm;

const styles = {
  spanColor: {
    color: "primary",
  },  
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '30px', '30px', '35px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  badaTitle: {
    fontWeight: 'bold',
    fontSize: ['48px', null, null, null, '48px', '48px', '48px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    alignItems: 'center',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};