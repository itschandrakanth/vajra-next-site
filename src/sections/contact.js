import { useRef } from 'react';

const Contact = () => {

    const contactRef = useRef()



    async function handleOnSubmit(e) {
        e.preventDefault();
      
        const formData = {};
      
        Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value;
        });
      
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
    }

    return (
        <section className="text-gray-600 body-font relative" id="section1" ref={contactRef}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get Early Access</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Next Generation AI Chatbot is here. We would love to have you as our Valued Customer. <br/>Sign up with us to get the early access and special discounts.</p>
                </div>

                <form method="post" onSubmit={handleOnSubmit}>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name*</label>
                                <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-1/2">
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
                            <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="business-name" className="leading-7 text-sm text-gray-600">Business Name</label>
                                <input type="text" id="business-name" name="business_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="Category" className="leading-7 text-sm text-gray-600">Business Category</label>
                                <input id="url" name="business_category" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> 
                            </div>
                            </div>
                            
                            <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            </div>
                            <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
  };
  
  export default Contact;