import Link from 'next/link'

const section4CTA = () => {
  return (
    <div>
      <section class="text-gray-600 bg-gray-50 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Start your 14-day free trial now. Automate Your Business.
            </h1>
            <Link href="https://api.whatsapp.com/send?phone=916302396226">
            <button class="flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg mt-10 sm:mt-0">
              Let's Get Started
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default section4CTA;
