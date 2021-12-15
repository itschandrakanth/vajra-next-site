/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "react-lottie";
import feedChat from "../../assets/animations/offer-vajra.json";
import { useState } from 'react';

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
    animationData: feedChat,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Box id="request" as="section" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Try All our AI products at just <span sx={styles.spanColor}>1 rupee</span> for first month. 
            </Heading>
            <div id="open-vajra"></div>
            <Text as="p" sx={styles.text}>
            24/7 Human-like AI chatbot. Get access to all the features.
            </Text>
            <Link
                activeClass="active"
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
          {/* <Lottie options={LottieDefaultOptions} /> */}
          <div>
            <div class="container px-5 py-24 mx-auto flex">
                <div class=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                <p class="leading-relaxed mb-5 text-gray-600">Take the first step to benefit your business</p>
                <form onSubmit={handleOnSubmit}>
                  <div className="flex flex-wrap -m-2">
                              <div className="p-2 w-full">
                              <div className="relative">
                                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name*</label>
                                  <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div className="p-2 w-full">
                              <div className="relative">
                                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
                                  <input type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div className="p-2 w-1/2">
                              <div className="relative">
                                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone*</label>
                                  <input type="tel" id="phone" name="phone" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              <div className="p-2 w-1/2">
                              <div className="relative">
                                  <label htmlFor="homepage" className="leading-7 text-sm text-gray-600">Website Url</label>
                                  <input type="url" id="url" name="homepage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              </div>
                              
                              <div className="p-2 w-full">
                              <div className="relative">
                                  {/* <input type="time" name="timestamp" value={handleInputChanged} hidden/> */}
                              </div>
                              {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Grab Offer</button> */}
                              </div>
                              {/* {submitted && 
                                  <div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg content-center" role="alert">
                                  <p class="font-bold">Success</p>
                                  <p>Form has been submitted successfully. One of our friendly team will contact you soon</p>
                                </div>
                              } */}
                              <button  class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Let me in!</button>
                          </div>
                          
                </form>
                {submitted && 
                                <div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg content-center" role="alert">
                                <p class="font-bold">Success</p>
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
