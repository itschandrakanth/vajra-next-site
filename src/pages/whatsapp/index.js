import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from 'components/logo';
import { useState, useRef } from 'react';
import FeedChat from "sections/feedchat/feedchat";
import Offer from "sections/offer/offer-banner";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import OfferHeading from 'sections/offer/offer-heading';
import OfferLeftImg from 'sections/offer/offer-left-img'
import LeftDash from 'sections/offer/left-dash';
import OfferFeatureGrid from 'sections/offer/offer-feature-grid'
import Dashboard from 'sections/offer/offer-dashboard';
import OfferForm from 'sections/offer/offer-form';
import OfferRightImg from 'sections/offer/offer-right-img'
import RightDash from 'sections/offer/right-dash'
import Services from 'sections/services'
import Faq from 'sections/faq'
import Banner from '../../sections/banner';
import chatWA from '../../assets/animations/chat-user.json';
import whatsappLogo from '../../assets/animations/whatsapp-logo.json';
import whatsappGray from '../../assets/animations/whatsapp-gray.json';
import Lottie from 'react-lottie';
// import Script from 'next/script'
import logo from '../../assets/images/vajra-logo.png';
import Video from '../../sections/intro-video'
import WhatsappForm from '../../sections/whatsapp/contact'
import WaBgContainer from '../../assets/images/Icon-Grid.svg'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const chatWa = {
    loop: true,
    autoplay: true,
    animationData: chatWA,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  const whatsappLogoAnim = {
    loop: true,
    autoplay: true,
    animationData: whatsappLogo,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  const whatsappGrayAnim = {
    loop: true,
    autoplay: true,
    animationData: whatsappGray,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <ThemeProvider theme={theme}>
        <Layout>
            <SEO title="Vajra.ai - AI and ML Business Solutions" /> 

            <section class="text-gray-600 body-font bg-green-50" style={styles.waContainer}>
              <div class="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 class="leading-6 title-font font-bold sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Meet your customers where they<span className="text-green-500"> already are!</span>
                  </h1>
                  <p class="leading-6 pt-5">A fast and versatile two-way customer communication tool for businesses supporting unlimited users and devices.
                  Scalable, Reliable & Affordable Fully Managed WhatsApp Official Messaging Solution.</p><br />
                  <p className="mb-8">We take care <span className="text-green-600 font-bold">Onboarding, Support, Billing and fully managed services.</span></p>
                  <div class="flex justify-center mt-10">
                  <a href="#request">
                      <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://app.vajra.ai/?utm_source=vajra-whatsapp-page">
                      <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Lottie className="py-5 mt-20" options={chatWa} height={480} width={320} /><br />
                </div>
              </div>
            </section>
            {/* 2nd */}
            

            <section class="text-gray-600 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <div class="flex justify-center">
                    
                    <h1 class="sm:text-3xl text-2xl text-bold font-medium title-font mb-4 text-indigo-600">Think CX - Think</h1>
                    <span>
                    <img class="mx-2 pt-0.3" src={logo} alt="logo" width="140" /></span>
                  </div>
                  
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Break the boundaries of communication: Now connect with your customers globally on their favorite messaging app on any operating system, device and mobile carrier. </p>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <p class="leading-relaxed uppercase">Right</p>
                      <h2 class="title-font font-medium text-2xl text-gray-900">Audience</h2>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                      <p class="leading-relaxed uppercase">Right</p>
                      <h2 class="title-font font-medium text-2xl text-gray-900">Message</h2>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <p class="leading-relaxed uppercase">Right</p>
                      <h2 class="title-font font-medium text-2xl text-gray-900">Time</h2>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <p class="leading-relaxed uppercase">Right</p>
                      <h2 class="title-font font-medium text-2xl text-gray-900">Platform</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-10 mx-auto">
                {/* <div class="text-center mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">WhatsApp Business use Cases</h1>
                  
                </div> */}
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">24/7 Customer Support </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Create Auto-Replies for FAQ’s</span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Delivery Tracking </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Employee Onboarding </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Effective Lead to Sales Conversions </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Bulk Notifications </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Shipping Alert </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Appointment bookings </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Event Updates </span>
                    </div>
                  </div>
                  <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">Customer Account Updates</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
            <Video />
            
            {/* 3rd */}
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2>
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Customer Centric Service Model.</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Unlike the free WhatsApp app and WhatsApp Business app, WhatsApp Business API is designed for brands to commit to a customer-centric service model at a 24-hour service level agreement.</p>
                </div>
                <div class="flex flex-wrap">
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">100% user Engagement</h2>
                    <p class="leading-relaxed text-base mb-4">Subscribers are more likely to open triggered messages from your bot compared to bulk campaigns.</p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Convert Leads to Sales</h2>
                    <p class="leading-relaxed text-base mb-4">Convert leads into customers by sending valuable content in your automated flows.</p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Get Customers feedback</h2>
                    <p class="leading-relaxed text-base mb-4">Build a better product or service by getting reviews from your customers.</p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">24/7 Customer Support</h2>
                    <p class="leading-relaxed text-base mb-4">Create live chats to provide support and speedy answers 24/7.</p>
                  </div>
                </div>
                <div class="flex justify-center mt-10">
                    <a href="#request">
                      <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://app.vajra.ai/?utm_source=vajra-whatsapp-page">
                      <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
              </div>
              
            </section>
            {/* 4th */}

            {/* <Lottie className="mt-20" options={chatWa} height={360} width={360} /><br /> */}

            

            {/* 5th */}
            <section class="text-gray-600 body-font bg-gray-50">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                {/* <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2> */}
                  <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Automate conversations with your customers, <br /> <span className="text-green-500 font-bold text-4xl">from the first Touch Point to closing the Sale.</span></h1>
                  
                </div>
                <div class="flex flex-wrap -m-4">
                  <div class="xl:w-1/3 md:w-1/2 p-4 ">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">24/7 Customer Support</h2>
                      <p class="leading-relaxed text-base">Through WhatsApp, customers can initiate conversations and ask for support regarding purchase details, delivery updates, etc.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4 ">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Navigation & Discovery</h2>
                      <p class="leading-relaxed text-base">Use NLP to understand the context of user inputs and help them discover relevant products and services with the WhatsApp Business API Client.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Transactions</h2>
                      <p class="leading-relaxed text-base">Enable purchases and bookings through WhatsApp by integrating your internal APIs to the WhatsApp API Business Client.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Online Payments</h2>
                      <p class="leading-relaxed text-base">Process online payments by providing dynamically generated payment links through WhatsApp.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Invoicing</h2>
                      <p class="leading-relaxed text-base">Send purchase invoice and bill details as an attachment through WhatsApp</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Delivery Updates</h2>
                      <p class="leading-relaxed text-base">Send instant delivery updates for your Customers and track the statuses.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Reminders</h2>
                      <p class="leading-relaxed text-base">Notify users about upcoming events and tasks</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Centralised Review platform</h2>
                      <p class="leading-relaxed text-base">Collecting feedback from users</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Get More Leads & Sales</h2>
                      <p class="leading-relaxed text-base">Conversational forms - Gathering data - Extracting leads </p>
                    </div>
                  </div>
                </div>
              
                <div class="flex justify-center mt-10">
                    <a href="#request">
                      <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://app.vajra.ai/?utm_source=vajra-whatsapp-page">
                      <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
              </div>
            </section>

            {/* 6th */}
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2>
                  <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">The different WhatsApp solutions from an Enterprise Perspective</h1>
                  {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                  <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-green-600 font-bold ">WhatsApp Business API</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">WhatsApp Business App</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">WhatsApp App</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-4 py-3">Data Storage</td>
                        <td class="px-4 py-3 border-x-2 text-green-600 bg-green-50">Designated environment by enterprise</td>
                        <td class="px-4 py-3">Staff’s work phone</td>
                        <td class="px-4 py-3">Staff’s personal phone</td>
                        <td class="w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-gray-200 px-4 py-3">Automation</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes, by chatbot dialogue</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">Everything manual</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 ">Everything manual</td>
                        <td class="border-t-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-gray-200 px-4 py-3">Push notification</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Both automatic and manual operation</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">Manual operation only</td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 ">Manual operation only</td>
                        <td class="border-t-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Multi-agents</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Single admin only</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">Single admin only</td>
                        <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">CRM Integration</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">No</td>
                        <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Green Tick (Verification)</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Pilot program available for a small number of brands</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">No</td>
                        <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                  
                </div>
              </div>
            </section>

            {/* Form */}
            <WhatsappForm />
        </Layout>
    </ThemeProvider>

    
    
  )
}

const styles = {
  waContainer: {
    backgroundImage: `url(${WaBgContainer})`
   }
}