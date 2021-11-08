import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import OfferFeatures from 'sections/offer-features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
import OfferContact from 'sections/offer-contact';
import { useRef } from 'react';
import VajraPricing from 'sections/vajra-pricing';

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, BadgeCheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Lead generation bot',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Customer Support',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Virtual assistant',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Lead Quality checker ',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Appointment Bookings',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Sales Generation ',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Faq Bots',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Customer Engagement bots',
    icon: BadgeCheckIcon,
  },
]

export default function IndexPage() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vajra.ai" /> 
       
        {/* <OfferFeatures /> */}
        {/* <IntroVideo /> */}
        {/* <UsefulFeatures />
        <Widgets /> */}
        {/* <Pricing /> */}
        {/* <Faq /> */}
        {/* <VajraPricing /> */}
        
        <div className="py-12 bg-white">
          <div className="">
            <div className="m-10 lg:text-center lg:m-60">
              {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
              <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Automate Lead Generation and Customer Service in no time with our Vajra Bot
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get 5X increase in your Sales & Customer Engagement with our 24/7 AI Live Chatbot - No Coding skills Required
              </p>
              <a href="#">
                <button id="open-vajra" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-10 my-10">
                  Try Vajra Demo
                </button>
              </a>
              
              <a href="https://wa.me/+919133085769">
                <button class="bg-green-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded shadow mx-10">
                  Whatsapp us
                </button>  
              </a>
               
            </div>

            

            <div className="m-10 m1-40 lg:m-60">
              <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">
              Vajra.ai works for...
              </p>
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 pt-2">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="m-10 lg:text-center lg:m-60">
              
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Bring advanced intelligence into your Business with our Vajra AI for EASY conversion of Website Visitors into esteemed Customer
              </p>
              <button id="open-vajra" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-10 my-10">
                  Try Vajra Demo
                </button>
              <a href="https://wa.me/+919133085769">
                <button class="bg-green-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded shadow mx-10">
                  Whatsapp us
                </button>  
              </a> 
            </div>
          </div>
           
        </div>
        <OfferContact id="section1" />
      </Layout>
    </ThemeProvider>
  );
}
