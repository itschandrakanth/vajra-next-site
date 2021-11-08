import { useRef, useState } from 'react';

const OfferContact = () => {
// export default function OfferContact() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [homepage, setHomepage] = useState('')
    // const [usedBot, setUsedBot] = useState('')
    // const [businessName, setBusinessName] = useState('')
    // const [message, setMessage] = useState('')
    // const [businessCategory, setBusinessCategory] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {}
        // console.log("ELEMENTS",e.currentTarget.elements)
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value
            
        });
        await fetch('/api/mail', { 
            method: 'post',
            body: JSON.stringify(formData),
        })
        setSubmitted(true)
        // console.log(formData)
        
      
        // const formData = {
        //     name,
        //     email,
        //     phone,
        //     homepage,
        //     usedBot,
        // };

        // await fetch('/api/mail', {
        //   method: 'POST',
        //   body: JSON.stringify(formData)
        // }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //         console.log('Response Succeeded')
        //         setSubmitted(true)
        //         setName('')
        //         setEmail('')
        //         setPhone('')
        //         setHomepage('')
        //         setUsedBot('')
        //     }
        // })

        // setSubmitted(true)
        
    }

    return (
        <section className="text-gray-600 body-font relative" id="section1" >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-3xl text-5xl font-medium title-font mb-4 text-gray-900">Pay just ₹1 for first month</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><br/>Sign up with us to get the early access and special discounts.</p>
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
                            <div className="p-2 w-1/3">
                            <div className="relative">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone*</label>
                                <input type="tel" id="phone" name="phone" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-1/3">
                            <div className="relative">
                                <label htmlFor="homepage" className="leading-7 text-sm text-gray-600">Website Url</label>
                                <input type="url" id="url" name="homepage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-1/3">
                            <div className="relative">
                                <label htmlFor="botbefore" className="leading-7 text-sm text-gray-600">Used any Bot before?</label>
                                <input type="text" id="botbefore" name="bot_before" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Grab Offer</button>
                            </div>
                            {submitted && 
                                <div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg content-center" role="alert">
                                <p class="font-bold">Success</p>
                                <p>Form has been submitted successfully. One of our friendly team will contact you soon</p>
                              </div>
                            }
                        </div>
                    </div>
                </form>
                
            </div>
        </section>
    );
  };
  
  export default OfferContact;