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
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-48 mx-auto mb-10">
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
