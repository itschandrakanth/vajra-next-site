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
import truecallerBanner from '../../assets/images/business-truecaller.png'
// import '../../../public/script.js'
import $ from 'jquery'
// import WAChatVideo from '../../assets/animations/wa-chat-vajra2.mp4'
import WAChatGif from '../../assets/images/wa-bg-vajra.gif'
import Link from "next/link";
import educationImage from "../../assets/images/icons/education.png";
import healthcareImage from "../../assets/images/icons/healthcare.png";
import realestateImage from "../../assets/images/icons/realestate.png";
import ecommerceImage from "../../assets/images/icons/ecommerce.png";

import truecallerPriority from "../../assets/images/priority_calling_truecaller.png"
import truecallerAnalytics from "../../assets/images/analytics_truecaller.png"

import TruecallerPricing from './TruecallerPricing'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function TrueCallerPage() {
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
            <section className="text-gray-600 body-font bg-gray-50" >
              <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="leading-6 title-font font-bold sm:text-5xl text-3xl font-medium text-gray-900">Verified Business Caller ID <sup className="text-blue-500 text-2xl">from Truecaller</sup>
                  </h1>
                     <br /><span className="text-blue-500 text-4xl font-bold">Stand out from the clutter</span>
                  {/* <h2 className="leading-6 title-font font-bold sm:text-xl text-xl mb-4 font-medium text-gray-900">Stand out from the clutter</h2> */}
                  <p className="leading-6 text-gray-900 pt-5">Truecaller enriches the user experience for calls from Verified Businesses by adding elements that project Trust & Safety</p><br />
                  <div class="flex py-2">
                    {/* <span class="text-gray-900">Represent your Brand accurately</span> */}
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="ml-auto text-gray-900">Represent your Brand accurately</span>
                    </div>
                    <div class="flex  py-2">
                    {/* <span class="text-gray-500">Size</span> */}
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="ml-auto text-gray-900">Stand out from the noise of unverified calls</span>
                    </div>
                    <div class="flex  mb-6 py-2">
                    {/* <span class="text-gray-500">Quantity</span> */}
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="ml-auto text-gray-900">Empower customers to recognise identity theft</span>
                </div>
                  {/* <p className="mb-8">We take care <span className="text-blue-600 font-bold">Onboarding, Support, Billing and fully managed services.</span></p> */}
                  <div className="flex justify-center mt-5">
                  <a href="https://business.truecaller.com/register?ref=vajra.ai">
                      <button className="inline-flex text-white bg-blue-500 rounded-full border-0 py-5 px-10 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
                    </a>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* <Lottie className="py-5 mt-20" options={chatWa} height={480} width={320} /><br /> */}
                
                {/* <video autoPlay loop>
                  <source src={WAChatVideo} />
                </video> */}
                <img src={truecallerBanner} />
                </div>
              </div>
            </section>
            {/* 2nd */}
            

            <section className="text-gray-600 body-font">
              <div className="container px-5 pt-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <div className="flex justify-center">
                    
                    <h1 className="sm:text-4xl text-3xl text-bold font-medium title-font mb-4 text-blue-600">Let your customer know why you are calling them</h1>
                  </div>
                  
                  <p className="lg:w-2/3 mx-auto leading-relaxed font-bold text-base text-2xl">Introducing Call Reason with Verified Caller ID </p>
                </div>
                {/* <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Message</h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Time</h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <p className="leading-relaxed uppercase">Right</p>
                      <h2 className="title-font font-medium text-2xl text-gray-900">Platform</h2>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            
            <section className="text-gray-600 body-font">
              <div className="container px-5 mx-auto">
                {/* <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">WhatsApp Business use Cases</h1>
                  
                </div> */}
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded-full rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Priority Calling </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded-full rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Analytics</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded-full rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Reach customers at the right moment</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded-full rounded flex p-4 h-full items-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">Actionable insights on your customers</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </section>
            

            <div className="container px-5 pt-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <div className="md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-3xl sm:text-3xl text-gray-900 font-medium title-font mb-2">Reach customers at the right moment</h2>
                    <p className="leading-relaxed text-base mb-4">For better call pick-up rates, your business can qualify for important and time-sensitive calls.</p>
                  </div>
                  <div className="flex justify-center">
                  <img width={640} height={640} src={truecallerPriority} />
                  </div>
                  <div className="md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-3xl sm:text-3xl text-gray-900 font-medium title-font mb-2">Actionable insights on your customers</h2>
                    <p className="leading-relaxed text-base mb-4">Easily manage your business’ numbers and view amazing insights into calling patterns to discover the health of your brand’s call campaigns.</p>
                  </div>
                  <div className="flex justify-center">
                  
                  <img width={640} height={640} src={truecallerAnalytics} />
                  </div>
                  
                </div>
                
              </div>
              <div className="flex justify-center mt-5">
              <a href="https://business.truecaller.com/register?ref=vajra.ai">
                <button className="inline-flex text-white bg-blue-500 rounded-full border-0 py-5 px-10 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
              </a>
            </div>
            {/* 3rd */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                  <h2 className="text-lg text-blue-500 tracking-widest font-medium title-font mb-5 uppercase">TESTIMONIALS</h2>
                  <p className="lg:w-2/3 mx-auto leading-relaxed  text-xl italic">"We are also one of the early access users of the Call reason and it has assisted in adding more context to our delivery calls and improving customer confidence by communicating even before our call is picked up"</p>
                  <h1 className="title-font sm:text-2xl text-2xl my-4 font-medium text-gray-900">- Swiggy</h1>
                </div>
                <div className="flex flex-wrap">
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
                    <p className="leading-relaxed text-base mb-4 italic">"Truecaller Identity has been a stand out solution, From the first day of implementation we have witnessed a surge in the call pick up rates & also the call back request from customers. With a dashboard to monitor the performance of our phone numbers & excellent Support and Account Management team Truecaller has added great value for our call Center operations managing leads & customer experiences."</p>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font">Pratik Yadav</h2>
                    <p className="leading-relaxed text-base mb-4 italic">GoMechanic</p>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <p className="leading-relaxed text-base mb-4 italic">"Thanks to Truecaller Identity, our delivery partners have seen a significant improvement in phone calls getting picked up by our customers during order fulfillment "</p>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font">Brijesh Bharadwaj</h2>
                    <p className="leading-relaxed text-base mb-4 italic">Director of Product, Dunzo</p>
                    <div className="flex justify-center mt-10">
                    <a href="https://business.truecaller.com/register?ref=vajra.ai">
                      <button className="inline-flex text-white bg-blue-500 rounded-full border-0 mt-10 py-5 px-10 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
                    </a>
                  </div>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <p className="leading-relaxed text-base mb-4 italic">"Truecaller has helped us increase connectivity between our service partner and customers by identifying each other. Truecaller has also enabled improved service delivery by letting customers know that the KENT service team is trying to reach out to them."</p>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font">Varun Gupta</h2>
                    <p className="leading-relaxed text-base mb-4 italic">Director, Kent RO Systems Ltd.</p>
                    
                  </div>
                </div>
                
              </div>
              
            </section>
            {/* 4th */}

            {/* <Lottie className="mt-20" options={chatWa} height={360} width={360} /><br /> */}

            

            {/* 5th */}
            <section className="text-gray-600 body-font bg-gray-50">
              <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                {/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1 uppercase">Vajra Whatsapp Business</h2> */}
                  <h1 className="sm:text-3xl text-3xl font-medium title-font font-bold mb-2 text-gray-900">Purchase the Starter Plan to unlock our enterprise offering 🚀 <br /> <span className="text-blue-500  text-3xl">Get started with one of the plans from below</span></h1>
                  
                </div>
               <TruecallerPricing />
              
              </div>
            </section>

            {/* 6th */}
            <div className="flex flex-col text-center w-full mt-20 mb-2">
                  <div className="flex justify-center">
                    
                    <h1 className="sm:text-4xl text-3xl text-bold font-medium title-font mb-4 text-blue-600">Frequently asked questions</h1>
                  </div>
                  
                  <p className="lg:w-2/3 mx-auto leading-relaxed font-bold text-base text-lg">Got questions? do not worry - we are here to explain everything you might want to know.</p>
                </div>

            <section class="text-gray-600 body-font">
              <div class="container px-20 py-20 mx-auto flex flex-wrap">
                <div class="flex flex-wrap">
                  <div class="p-4 ">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Do you have a free POC/trial for the verified caller id?</h2>
                        <p class="leading-relaxed text-base">Hundreds of businesses in India and across the world use Verified Business Caller ID to increase the efficiency of their communication. Unfortunately, we do not have a provision for a free POC or a trial.</p>
                       
                      </div>
                    </div>
                  </div>
                  <div class="p-4">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">What is the difference between a normal caller id and a verified/priority caller id?</h2>
                        <p class="leading-relaxed text-base">Normal unverified calls on Truecaller appear with a blue caller ID and the identity is based on community feedback. <br />Identity on a Verified / Priority call only appears with the genuine business name details provided during the registration process along with their logo, verified tick, right business category, and tags. Adding identity to business calling workflow. The Verified and priority badge comes with a green & purple caller ID.</p>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div class="p-4">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">What is the difference between priority and verified business calls?</h2>
                        <p class="leading-relaxed text-base">Verified and Priority badges are part of the Truecaller Business Caller ID offerings. Verified badges are approved after Truecaller vets the identity of the business and onboards to any of the pricing plans opted. <br />Priority Caller ID is an extension of the Verified Caller ID; with no extra charges over Verified Caller ID pricing. Priority badges are allocated exclusively for calls made by businesses that are extremely important for the end-user & are extremely time-sensitive.</p>
                        <p className='italic'>** Truecaller holds the right to approve or disapprove a number for priority caller ID</p>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div class="p-4">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">What is my covered call volume? What happens if I make more calls than my covered call volume?</h2>
                        <p class="leading-relaxed text-base">Covered call volume is the total number of calls a business can make under a plan. The covered call volume limit is calculated only for calls made to a Truecaller user.<br /> Covered call volume calculation: If a business has purchased a starter plan and makes a total of 300,000 calls in a quarter. If only 120,000 of these calls were made to a Truecaller user then the business has consumed 120,000 /150,000 covered call volume supported on the plan.<br /> Exceeding Covered call volume: If a business had made 300,000 calls in the above case with 180,000 calls being made to Truecaller users, the excess calls made is 30,000 and the business would have additional call charges of ₹0.36x30,000 = ₹10,800 added to his renewal invoice in the next term</p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/2">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Can a personal number be listed as a Verified Business Identity?</h2>
                        <p class="leading-relaxed text-base">Personal numbers cannot be listed as a Verified Business Identity. <br />During the onboarding process, businesses will have to declare the ownership of the numbers and it will be used exclusively by the business for its communication needs.</p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/2">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3 ">Is there a limit on the total numbers a business can list in each plan?</h2>
                        <p class="leading-relaxed text-base">Businesses can list up to 100 numbers as Verified Business without an additional fee.<br /> <br /> <br /> </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Form */}
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
        </Layout>
    </ThemeProvider>

    
    
  )
}

const styles = {
  waContainer: {
    backgroundImage: `url(${WaBgContainer})`
   }
}