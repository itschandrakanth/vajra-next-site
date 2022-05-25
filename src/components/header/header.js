/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import Logo from "components/logo";
import { NavLink } from "components/link";
import menuItems from "./header.data";
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { scroller } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import NextLink from "next/link";
import { HeaderLinks } from "./header.links";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const router = useRouter();

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          variant="layout.header"
          className={mobileMenu ? "is-mobile-menu" : ""}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo isWhite={mobileMenu} />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? "navbar active" : "navbar"}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? "active" : ""}
                >
                  {/* {menuItems.map(({ path, label }, i) => (
                    <li key={i}>
                      <NavLink
                        path={path}
                        label={label}
                        onClick={closeMobileMenu}
                      />
                      <Link href={path} onClick={closeMobileMenu}>
                        {label}
                      </Link> 
                    </li>
                  ))} */}

                  {/* <div className="nav-item">
                  <Link href="/"  onClick={closeMobileMenu}>
                        Home
                  </Link>
                  <Link href="/offer" onClick={closeMobileMenu}>
                        Chatbot
                  </Link> 
                  <Link href="/whatsapp" onClick={closeMobileMenu}>
                        WhatsApp
                  </Link> 
                  </div> */}
                </Box>
                <Box as="ul" sx={styles.footerNav}>
                  {HeaderLinks.map(({ path, label }, i) => (
                    <li key={i}>
                      <Link href={path}>{label}</Link>
                    </li>
                  ))}
                  {/* {menuItems.map(({ path, label }, i) => (
                    <li key={i}>
                      <NavLink
                        path={path}
                        label={label}
                        onClick={closeMobileMenu}
                      />
                    </li>
                  ))} */}
                </Box>
                {router.pathname === "/customer-connect" ||
                router.pathname === "/whatsapp" ||
                router.pathname === "/use-cases" ? (
                  <a href="https://connect.vajra.ai">
                    <Button variant="secondarySm" sx={styles.mobMenuGreen}>
                      Login
                    </Button>
                  </a>
                ) : (
                  <a href="https://app.vajra.ai">
                    <Button variant="secondarySm" sx={styles.mobMenu}>
                      Login
                    </Button>
                  </a>
                )}
                {/* <NextLink href="https://vajra.ai#how-it-works">Google
                </NextLink> */}
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose
                    onClick={closeMobileMenu}
                    color="white"
                    size="20px"
                  />
                </Button>
              ) : (
                <>
                  <a href="https://vajra.ai/services">
                    {/* <Button variant="primarySm" sx={styles.explore}>Try Free</Button> */}
                    <button class="gradient-button example-8">
                      <span>Try Free</span>
                      <span>🚀</span>
                    </button>
                  </a>
                  <MenuButton
                    aria-label="Toggle Menu"
                    onClick={openMobileMenu}
                  />
                </>
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    transition: "0.3s ease-in-out 0s",
    ".is-sticky": {
      header: {
        backgroundColor: "#fff",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [12],
        "&.is-mobile-menu": {
          backgroundColor: "text",
        },
      },
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "text",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        minHeight: "calc(100vh - 77px)",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },
        ul: {
          display: "block",
          "li + li": {
            marginTop: 5,
          },
          a: {
            color: "white",
          },
        },
      },
    },
  },
  navbar: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
    },
    ".active": {
      color: "primary",
    },
  },
  explore: {
    display: ["block", "block", "block", "block"],
    borderRadius: 20,
    marginLeft: 20,
    backgroundColor: "#DCDCDC",
    color: "#000",
    float: "right",
    // position: 'absolute',
    // bottom: 40,
    // left: 20,
    justifyContent: "justify-end",
    outline: "0 !important",
  },
  mobMenu: {
    display: ["none", "none", "block", "block"],
    borderRadius: 20,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 20,
    // position: 'absolute',
    // bottom: 40,
    // left: 20,
    justifyContent: "justify-end",
    outline: "0 !important",
  },
  mobMenuGreen: {
    display: ["none", "none", "block", "block"],
    borderRadius: 20,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 20,
    // position: 'absolute',
    // bottom: 40,
    // left: 20,
    justifyContent: "justify-end",
    outline: "0 !important",
    backgroundColor: "#16B881",
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
    path: {
      stroke: "#fff",
    },
  },
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
      ml: "3px",
    },
    ":hover": {
      svg: {
        ml: "8px",
      },
    },
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    "li + li": {
      ml: ["18px", "18px", "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px",
      },
    },
    a: {
      color: "textSecondary",
    },
  },
};
