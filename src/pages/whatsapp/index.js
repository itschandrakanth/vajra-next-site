import React, { useEffect } from 'react'
import anime from "animejs";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Heading } from '@theme-ui/components';


const config = {
    opacity: [0, 1],
    translateY: [40, 0],
    translateZ: 0,
    easing: "spring(1, 50, 8, 1)"
  };

export default function Whatsapp() {
    // const revealHeading = ({ elem, config }) => {
    //     return new Promise((resolve) => {
    //       anime({
    //         targets: elem,
    //         easing: "spring(1, 60, 15, 3)",
    //         ...config,
      
    //         update: (a) => {
    //           a.progress > 10 && resolve(elem);
    //           elem.classList.add("Revealed");
    //         }
    //       });
    //     });
    // };

    // useEffect(() => {
    //     const headline = document.querySelector(".uiui-headline");
    //     revealHeading({ elem: headline, config });
    // }, [])
    

  return (
    <p>Coming soon...</p>    
  )
}
