import React, { Fragment, useEffect } from 'react'
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
import Video from '../../sections/whatsapp-video'
import WhatsappForm from '../../sections/whatsapp/contact'
import WaBgContainer from '../../assets/images/Icon-Grid.svg'
// import '../../../public/script.js'
import $ from 'jquery'
// import WAChatVideo from '../../assets/animations/wa-chat-vajra2.mp4'
import WAChatGif from '../../assets/images/wa-bg-vajra.gif'
import Link from "next/link";
import educationImage from "../../assets/images/icons/education.png";
import healthcareImage from "../../assets/images/icons/healthcare.png";
import realestateImage from "../../assets/images/icons/realestate.png";
import ecommerceImage from "../../assets/images/icons/ecommerce.png";


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
  }
  
  return (
    <ThemeProvider theme={theme}>
        <Layout>
            <SEO title="Vajra.ai - AI and ML Business Solutions" /> 
            <section className="text-gray-600 body-font bg-gray-50" style={styles.waContainer}>
              <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="leading-6 title-font font-bold sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Make Whatsapp work for <br /><span className="text-green-500">Your Business</span>
                  </h1>
                  <h2 className="leading-6 title-font font-bold sm:text-xl text-xl mb-4 font-medium text-gray-900">Meet your customers where they already are!
                  </h2>
                  <p className="leading-6 pt-5">A fast and versatile two-way customer communication tool for businesses supporting unlimited users and devices.
                  Scalable, Reliable & Affordable Fully Managed WhatsApp Official Messaging Solution.</p><br />
                  <p className="mb-8">We take care <span className="text-green-600 font-bold">Onboarding, Support, Billing and fully managed services.</span></p>
                  <div className="flex justify-center mt-10">
                  <a href="/request-demo">
                      <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://connect.vajra.ai/register">
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* <Lottie className="py-5 mt-20" options={chatWa} height={480} width={320} /><br /> */}
                
                {/* <video autoPlay loop>
                  <source src={WAChatVideo} />
                </video> */}
                <img src={WAChatGif} />
                </div>
              </div>
            </section>
            {/* 2nd */}
            

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <div className="flex justify-center">
                    
                    <h1 className="sm:text-3xl text-2xl text-bold font-medium title-font mb-4 text-indigo-600">Think CX - Think</h1>
                    <span>
                    <img className="mx-2 pt-0.3" src={logo} alt="logo" width="140" /></span>
                  </div>
                  
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Break the boundaries of communication: Now connect with your customers globally on their favorite messaging app on any operating system, device and mobile carrier. </p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Audience</h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Message</h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Time</h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Platform</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                {/* <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">WhatsApp Business use Cases</h1>
                  
                </div> */}
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">24/7 Customer Support </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Create Auto-Replies for FAQ’s</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Delivery Tracking </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Employee Onboarding </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Effective Lead to Sales Conversions </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Bulk Notifications </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Shipping Alert </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Appointment bookings </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Event Updates </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Customer Account Updates</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
            <div className="flex justify-center mt-10">
                    <a href="/request-demo">
                      <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://connect.vajra.ai/register">
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
            <Video />
            
            {/* 3rd */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Customer Centric Service Model.</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unlike the free WhatsApp app and WhatsApp Business app, WhatsApp Business API is designed for brands to commit to a customer-centric service model at a 24-hour service level agreement.</p>
                </div>
                <div className="flex flex-wrap">
                  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">100% user Engagement</h2>
                    <p className="leading-relaxed text-base mb-4">Subscribers are more likely to open triggered messages from your bot compared to bulk campaigns.</p>
                  </div>
                  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Convert Leads to Sales</h2>
                    <p className="leading-relaxed text-base mb-4">Convert leads into customers by sending valuable content in your automated flows.</p>
                  </div>
                  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Get Customers feedback</h2>
                    <p className="leading-relaxed text-base mb-4">Build a better product or service by getting reviews from your customers.</p>
                  </div>
                  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">24/7 Customer Support</h2>
                    <p className="leading-relaxed text-base mb-4">Create live chats to provide support and speedy answers 24/7.</p>
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                    <a href="/request-demo">
                      <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://connect.vajra.ai/register">
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
              </div>
              
            </section>
            {/* 4th */}

            {/* <Lottie className="mt-20" options={chatWa} height={360} width={360} /><br /> */}

            

            {/* 5th */}
            <section className="text-gray-600 body-font bg-gray-50">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                {/* <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2> */}
                  <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Automate conversations with your customers, <br /> <span className="text-green-500 font-bold text-4xl">from the first Touch Point to closing the Sale.</span></h1>
                  
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/2 p-4 ">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">24/7 Customer Support</h2>
                      <p className="leading-relaxed text-base">Through WhatsApp, customers can initiate conversations and ask for support regarding purchase details, delivery updates, etc.</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4 ">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Navigation & Discovery</h2>
                      <p className="leading-relaxed text-base">Use NLP to understand the context of user inputs and help them discover relevant products and services with the WhatsApp Business API Client.</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Transactions</h2>
                      <p className="leading-relaxed text-base">Enable purchases and bookings through WhatsApp by integrating your internal APIs to the WhatsApp API Business Client.</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Online Payments</h2>
                      <p className="leading-relaxed text-base">Process online payments by providing dynamically generated payment links through WhatsApp.</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Invoicing</h2>
                      <p className="leading-relaxed text-base">Send purchase invoice and bill details as an attachment through WhatsApp</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Delivery Updates</h2>
                      <p className="leading-relaxed text-base">Send instant delivery updates for your Customers and track the statuses.</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Reminders</h2>
                      <p className="leading-relaxed text-base">Notify users about upcoming events and tasks</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Centralised Review platform</h2>
                      <p className="leading-relaxed text-base">Collecting feedback from users</p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-50">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Get More Leads & Sales</h2>
                      <p className="leading-relaxed text-base">Conversational forms - Gathering data - Extracting leads </p>
                    </div>
                  </div>
                </div>
              
                <div className="flex justify-center mt-10">
                    <a href="/request-demo">
                      <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://connect.vajra.ai/register">
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
              </div>
            </section>

            {/* 6th */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2>
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">The different WhatsApp solutions from an Enterprise Perspective</h1>
                  {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-green-600 font-bold ">WhatsApp Business API</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">WhatsApp Business App</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">WhatsApp App</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3">Data Storage</td>
                        <td className="px-4 py-3 border-x-2 text-green-600 bg-green-50">Designated environment by enterprise</td>
                        <td className="px-4 py-3">Staff’s work phone</td>
                        <td className="px-4 py-3">Staff’s personal phone</td>
                        <td className="w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Automation</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes, by chatbot dialogue</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Everything manual</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 ">Everything manual</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Push notification</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Both automatic and manual operation</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Manual operation only</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 ">Manual operation only</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Multi-agents</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Single admin only</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">Single admin only</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">CRM Integration</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Yes</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">No</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Green Tick (Verification)</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-green-600 bg-green-50">Pilot program available for a small number of brands</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">No</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                  
                </div>
              </div>
              <div className="flex justify-center mt-10">
                    <a href="/request-demo">
                      <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Request Demo</button>
                    </a>
                    <a href="https://connect.vajra.ai/register">
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Try for Free</button>
                    </a>
                  </div>
            </section>
            
            <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto mb-10 mt-20">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Vajra Whatsapp - Business Use Cases
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                How Businesses can use vajra.ai Whatsapp Business Automation
                Services
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div class="bg-blue-50 rounded-xl">
                  <Link href="/use-case/education">
                    <div class="p-6">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={educationImage} alt="vajra" />
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                        Education
                      </h2>
                      <p class="leading-relaxed text-base">
                        Use WhatsApp to manage your admissions, monitor your
                        students, and interact with them.
                      </p>
                      <button class="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-blue-100 rounded-full text-sm">Details →</button>
                    </div>
                  </Link>
                  
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div class="bg-red-50 rounded-xl">
                  <Link href="/use-case/healthcare">
                    <div class="p-6">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={healthcareImage} alt="vajra" />
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                        Health Care
                      </h2>
                      <p class="leading-relaxed text-base">
                      We bring doctors closer to the patients through WhatsApp. 
                      </p>
                      <button class="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-red-100 rounded-full text-sm">Details →</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div class="bg-purple-50 rounded-xl">
                  <Link href="/use-case/realestate">
                    <div class="p-6">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={realestateImage} alt="vajra" />
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                        Real Estate
                      </h2>
                      <p class="leading-relaxed text-base">
                      Harness the magic of WhatsApp to sell more properties with no stress!
                      </p>
                      <button class="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-purple-100 rounded-full text-sm">Details →</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div class="bg-pink-50 rounded-xl">
                  <Link href="/use-case/ecommerce">
                    <div class="p-6">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={ecommerceImage} alt="vajra" />
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                        E-Commerce
                      </h2>
                      <p class="leading-relaxed text-base">
                      Increase your revenues and provide the best customer experience through WhatsApp 
                      </p>
                      <button class="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-pink-100 rounded-full text-sm">Details →</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </section>

            {/* Form */}
            <WhatsappForm />
            <div>
              <div className="vfloating_btn" style={{ zIndex: '99999999999999' }}>
                <a className="va" target="_blank" href="https://wa.me/916302396226?text=hello">
                  <div className="vcontact_icon">
                  <svg width="30" viewBox="0 0 24 24"><defs/><path fill="#fff" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"/><path fill="#4caf50" d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"/><path fill="#fafafa" d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/></svg>
                  </div>
                </a>
                {/* <p className="vtext_icon">Chat with Vajra</p> */}
                <p className="vtext_icon_sub">Replies in a minute</p>
              </div>
            </div>
            {/* <script src="https://cloud.vajra.ai/regular-bot.js" vajraRegId="ES3gNLH4yMbagE0r3Hfm"></script> */}
            <script
              id="show-collectchat"
              dangerouslySetInnerHTML={{
                __html: `(function(w, d) { w.CollectId = "63859a594640ebe0301db206"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document)`,
              }}
            />
        </Layout>
    </ThemeProvider>

    
    
  )
}

const styles = {
  waContainer: {
    backgroundImage: `url(${WaBgContainer})`
   }
}