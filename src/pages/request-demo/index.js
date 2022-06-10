import React, { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "components/logo";
import { useState, useRef } from "react";
import Link from "next/link";

import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import educationImage from "../../assets/images/icons/education.png";
import healthcareImage from "../../assets/images/icons/healthcare.png";
import realestateImage from "../../assets/images/icons/realestate.png";
import ecommerceImage from "../../assets/images/icons/ecommerce.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function RequestDemo() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vajra.ai - Use cases" />
        <section className="text-gray-600 body-font overflow-hidden p-10">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-sm title-font text-indigo-500 mb-1">This will be an 1-1 Demo session on</h2>
                    <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">How Vajra.ai can help you sell more and better support your customers with our All New WhatsApp Business Automation.</h1>
                    <p className="leading-relaxed mb-4">We will showcase a presentation where we talk about Whatsapp API, WhatsApp Business Automation followed by a live demo of Vajra Sales CRM.</p>
                    <div className="flex mb-4">
                    
                    <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Key Takeaways</a>
                    {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                    </div>
                    
                    <div className="flex py-2">
                    <span className="text-gray-800">1. Learn How WhatsApp Business Automation works </span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-800">2. Learn How you Can Automate Your Business with WhatsApp API </span>
                    </div>
                    <div className="flex border-t border-b  border-gray-200 py-2">
                    <span className="text-gray-800">3. Learn How You Can track Sales/BDE’s performance</span>
                    </div>
                    <div className="flex border-b border-gray-200 py-2">
                    <span className="text-gray-800">4. Learn How to Send Bulk Messages to customers on WhatsApp</span>
                    </div>
                    <div className="flex mb-6 border-gray-200 py-2">
                    <span className="text-gray-800">5. Learn How you can Delight customers with Fast & Secure WhatsApp Customer Support</span>
                    </div>
                    <div className="flex flex-col border-b mb-2 border-gray-200 py-2">
                    <span className="text-gray-800 font-bold">Reach ~ 2Billion Customers</span>
                    </div>
                    <p>Two billion active monthly WhatsApp users in 182 countries, Reach Globally with our WhatsApp Business Automation messages each day.</p>

                    <div className="flex flex-col border-b mb-2 border-gray-200 py-2">
                    <span className="text-gray-800 font-bold">Engagement</span>
                    </div>
                    <p>75% of WhatsApp users are Daily Active Users(DAU) & Average time spent on whatsApp is 63 Minutes per Day .</p>

                    <div className="flex flex-col border-b mb-2 border-gray-200 py-2">
                    <span className="text-gray-800 font-bold">Connect ~ Convert </span>
                    </div>
                    <p>175 million people message a WhatsApp Business account every day.</p>

                    
                </div>
                    
                    <div className="calendly-inline-widget mt-5" data-url="https://calendly.com/vajra-ai/15min" style={{ minWidth:'420px', height:'900px' }}></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                    </div>
            </div>
            <div className="flex items-center flex-col">
            <h2 className="text-center text-2xl font-bold p-2 mb-4 ">Provide faster, seamless customer care 24/7 with our Vajra.ai WhatsApp Business Automation </h2>
            <a href="https://api.whatsapp.com/send?phone=916302396226?text=hi">
            <button className="flex items-center text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full p-2">Whatsapp Now</button>
            </a>
            
            </div>
            
            </section>
            


        <div>
          <div className="vfloating_btn">
            <a
              className="va"
              target="_blank"
              href="https://wa.me/916302396226?text=hello"
            >
              <div className="vcontact_icon">
                <svg width="30" viewBox="0 0 24 24">
                  <defs />
                  <path
                    fill="#fff"
                    d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
                  />
                  <path
                    fill="#4caf50"
                    d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
                  />
                  <path
                    fill="#fafafa"
                    d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
                  />
                </svg>
              </div>
            </a>
            {/* <p className="vtext_icon">Chat with Vajra</p> */}
            <p className="vtext_icon_sub">Replies in a minute</p>
          </div>
        </div>
        {/* <script src="https://cloud.vajra.ai/regular-bot.js" vajraRegId="ES3gNLH4yMbagE0r3Hfm"></script> */}
      </Layout>
    </ThemeProvider>
  );
}
