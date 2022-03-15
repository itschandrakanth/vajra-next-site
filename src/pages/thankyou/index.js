import Lottie from 'react-lottie';
import thankyouAnim from '../../assets/animations/thankyou.json';

const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: thankyouAnim,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

function index() {
    return (
        <div className='align-middle flex p-10 flex-col'>
            <Lottie options={LottieDefaultOptions} width={450}/>
            <p className='text-2xl text-center px-3'>Thank You! Your response has been received. One of our Friendly Team will contact you soon.</p>
            <script
              id="gad-conversion"
              dangerouslySetInnerHTML={{
                __html: `gtag('event', 'conversion', {'send_to': 'AW-10824972134/BQkQCIiMtqkDEObu36ko'});`,
                }}
            />
        </div>

    )
}

export default index
