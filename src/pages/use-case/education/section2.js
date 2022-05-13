import React from "react";

const section2 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are a leading communication solution for businesses facing
              difficulty managing their unlimited users and devices. Break the
              boundaries of communication: Now connect with your Students
              globally on WhatsApp on any operating system, device, and mobile
              carrier.{" "}
            </p>
            <div className="flex justify-center">
              <h1 className="sm:text-3xl text-2xl text-bold font-medium title-font mt-8 text-blue-600">
                Why Every Educational Institute Need Our Multi-Lingual, No-Code
                Chatbots?
              </h1>
              {/* <span>
                    <img className="mx-2 pt-0.3" src={logo} alt="logo" width="140" /></span> */}
            </div>
          </div>
          <div className="flex flex-wrap text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="bg-blue-50 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                {/* <p className="leading-relaxed uppercase">Right</p> */}
                <h2 className="title-font text-xl text-gray-900">
                  120 Minutes is Avg Time Spent on WhatsApp Per Person Per Day
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="bg-blue-50 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>

                {/* <p className="leading-relaxed uppercase">Right</p> */}
                <h2 className="title-font text-xl text-gray-900">
                  60% reduction in Manual Human intervention. Chatbots needs
                  little supervision.
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 ">
              <div className="bg-blue-50 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {/* <p className="leading-relaxed uppercase">Right</p> */}
                <h2 className="title-font text-xl text-gray-900">
                  70% reduction in expenses and 50% increase in revenues with
                  automated admission processes
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 ">
              <div className="bg-blue-50 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                {/* <p className="leading-relaxed uppercase">Right</p> */}
                <h2 className="title-font text-xl text-gray-900">
                  45% of students prefer making enquiries online and using
                  Chatbots
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default section2;
