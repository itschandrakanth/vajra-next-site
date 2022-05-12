import WaBgContainer from '../../../assets/images/Icon-Grid.svg'
import Lottie from 'react-lottie';
import chatWA from '../../../assets/animations/chat-user.json';
import studentJson from "../../../assets/animations/student.json";

const chatWa = {
    loop: true,
    autoplay: true,
    animationData: chatWA,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
};

const student = {
    loop: true,
    autoplay: true,
    animationData: studentJson,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
};


const hero = () => {
  return (
    <div>
      <section
        className="text-gray-600 body-font bg-gray-50"
      >
        <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="leading-6 title-font font-bold sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              <span className="text-red-500">We Bring Doctors</span> closer to the patients through WhatsApp. 
            </h1>
            <p className="leading-6 pt-5">
            Allow your patients to contact you and seek medical assistance at any time. 
            </p>
            <br />
            {/* <p className="mb-8">We take care <span className="text-green-600 font-bold">Onboarding, Support, Billing and fully managed services.</span></p> */}
            <div className="flex justify-center mt-10">
              <a href="https://api.whatsapp.com/send?phone=916302396226">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Request Demo
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=916302396226">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Start a Free Trial
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie
              className="py-5 mt-20"
              options={student}
              height={480}
              width={320}
            />
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;

const styles = {
    waContainer: {
      backgroundImage: `url(${WaBgContainer})`
     }
}