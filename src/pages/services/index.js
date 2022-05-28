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

export default function Example() {
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
        <section className="text-gray-600 body-font mb-48">
          <div className="container px-5 pt-48 mx-auto mb-10">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-600">
                Vajra.ai For Business 
              </h1>
              <p className="sm:text-3xl text-2xl font-bold font-large title-font mb-2 text-gray-900">Happy Customers = Happy Business</p>
              <p className="lg:w-1/2 w-full leading-relaxed font-bold text-gray-500">
                Digital Sales | AI Chatbots | Sales CRM | WhatsApp Business API
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/2 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div className="bg-blue-50 rounded-xl text-center py-8">
                  <Link href="https://app.vajra.ai/accounts/signup/?=/">
                    <div className="p-6">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={educationImage} alt="vajra" />
                      </div>
                      <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                        Website Chatbot 
                      </h2>
                      <p className="leading-relaxed text-base mb-5">
                      Build & Deploy a Custom Chatbot on your Website or App in just 20 minutes.
                      </p>
                      {/* <button className="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-blue-100 rounded-full text-sm">Try for Free →</button> */}
                      <a className='inline-block align-middle' href="https://app.vajra.ai/accounts/signup/?=/">
                        <button class="gradient-button-blue example-8-blue">
                          <span className='grid content-center text-white font-bold'>Try for Free</span>
                          <span>🚀</span>
                        </button>
                      </a>
                    </div>
                  </Link>
                  
                </div>
              </div>
              <div className="xl:w-1/2 md:w-1/2 p-4 cursor-pointer hover:scale-110">
                <div className="bg-green-50 rounded-xl text-center py-8">
                  <Link href="https://connect.vajra.ai/register">
                    <div className="p-6">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <img src={ecommerceImage} alt="vajra" />
                      </div>
                      <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                        WhatsApp Business Automation
                      </h2>
                      <p className="leading-relaxed text-base mb-5">
                      Meet your customers where they already are! Break the boundaries of communication.
                      </p>
                      {/* <button className="flex text-black bg-gray-50 border-0 my-5 py-2 px-4 focus:outline-none hover:bg-pink-100 rounded-full text-sm">Try for Free →</button> */}
                      <a className='inline-block align-middle' href="https://connect.vajra.ai/register">
                        <button class="gradient-button-green example-8-green">
                          <span className='grid content-center text-white font-bold'>Try for Free</span>
                          <span>🚀</span>
                        </button>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
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
