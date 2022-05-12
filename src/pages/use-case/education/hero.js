import WaBgContainer from '../../../assets/images/Icon-Grid.svg'
import Lottie from 'react-lottie';
import chatWA from '../../../assets/animations/chat-user.json';
import student3Json from "../../../assets/animations/student3.json";


const student = {
    loop: true,
    autoplay: true,
    animationData: student3Json,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
};


const hero = () => {
  return (
    <div>
      <section
        className="text-gray-600 body-font bg-blue-50"
      >
        <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="leading-6 title-font font-bold sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              <span className="text-blue-500">Use WhatsApp to </span> manage
              your admissions, monitor your students, and interact with them
            </h1>
            <p className="leading-6 pt-5">
              From Registration to Admission to Student assistance, we make your
              educational process easier using WhatsApp APIs and customized
              Chatbots.
            </p>
            <br />
            {/* <p className="mb-8">We take care <span className="text-green-600 font-bold">Onboarding, Support, Billing and fully managed services.</span></p> */}
            <div className="flex justify-center mt-10">
              <a href="https://api.whatsapp.com/send?phone=916302396226">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg">
                  Request Demo
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=916302396226">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
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