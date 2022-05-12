import chatbotSupportImage from '../../../assets/images/icons/chatbot-support.png'
import updateImage from '../../../assets/images/icons/update.png'
import notificationImage from '../../../assets/images/icons/notification.png'
import securityImage from '../../../assets/images/icons/security.png'
import offerImage from '../../../assets/images/icons/offer.png'

const section4_2 = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
            {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2> */}
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Customize Customer Experiences to Promote Your Brand
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                  src={chatbotSupportImage}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                24x7 Chatbot Support
                </h2>
              </div>
            </div>
            <div class="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                  src={notificationImage}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Send Store Notifications Via Whatsapp
                </h2>
              </div>
            </div>
            <div class="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                  src={offerImage}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Personalized Offers
                </h2>
              </div>
            </div>
            <div class="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                  src={securityImage}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Payment Security with Integration Partners
                </h2>
              </div>
            </div>
            <div class="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                  src={updateImage}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Real-Time Orders Updates 
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default section4_2;
