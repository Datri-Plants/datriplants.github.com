import React from 'react';
import hero from '../images/hero.jpg'
import styles from "../nicepage.module.css";
import sectionTwoStyles from "../components/SectionTwo.module.css";
import homeStyles from "../components/Home.module.css";
import Nav from 'react-bootstrap/Nav';
import '../App.css';
export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${hero})`, height: 800 }}
    >
    <div>
    <br />
    
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cart" eventKey="link-2">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" eventKey="link-3">
            Contact
          </Nav.Link>
        </Nav.Item>
        <br />
        <br />
      </Nav>
    </div>
    <div>
            <section
                className={`${styles['u-align-left']} ${styles['u-clearfix']} ${styles['u-image']} ${styles['u-shading']} ${homeStyles['u-section-1']}`}
                id="sec-988b"
            >
                <div
                    className={`${styles["u-clearfix"]} ${styles["u-sheet"]} ${styles["u-sheet-1"]}`}
                >
        
                
                
                    <div
                        className={`${styles["u-clearfix"]} ${styles["u-expanded-width"]} ${styles["u-layout-wrap"]} ${styles["u-layout-wrap-1"]}`}
                    >
                        <div className={`${styles["u-layout"]}`}>
                            <div className={`${styles["u-layout-row"]}`}>
                                <div
                                    className={`${styles["u-container-style"]} ${styles["u-layout-cell"]} ${styles["u-left-cell"]} ${styles["u-size-30"]} ${styles["u-layout-cell-1"]}`}
                                    style={{ position: 'relative',
                                    top: 170}}
                                >
                                    <div
                                        className={`${styles["u-container-layout"]} ${sectionTwoStyles["u-container-layout-1"]}`}
                                    >
                                        <h1 className={`${styles["u-text"]} ${styles["u-text-1"]}`}>
                                            <span style={{ fontSize: "6.25rem" }}>
                                                <span style={{ fontWeight: 700 }}>
                                                    DAT<span style={{ fontWeight: 700 }}></span>RI
                                                </span>
                                                <br />
                                                PLANTS
                                            </span>
                                            <span
                                                style={{ fontSize: "1.875rem" }}
                                                className={`${styles["u-text-custom-color-1"]}`}
                                            >
                                                <br />
                                                <span
                                                    class={`${styles["u-text-white"]}`}
                                                    style={{ fontSize: "1.25rem" }}
                                                >
                                                    <span>
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                    </span>
                                                    We Care For You
                                                </span>
                                            </span>
                                            <br />
                                            <span style={{ fontSize: "0.875rem" }}>
                                                <span style={{ fontSize: "2.25rem" }}></span>
                                            </span>
                                            <br />
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    className={`${homeStyles["u-container-style"]} ${homeStyles["u-layout-cell"]} ${homeStyles["u-right-cell"]} ${homeStyles["u-size-30"]} ${homeStyles["u-layout-cell-2"]}`}
                                    style={{ position: 'relative',
                                    top: 310}}
                                >
                                    <div className={`${homeStyles['u-container-layout']} ${homeStyles['u-valign-top']} ${homeStyles['u-container-layout-2']}`}>
                                        <p
                                            className={`${homeStyles["u-text"]} ${homeStyles["u-text-body-alt-color"]} ${homeStyles["u-text-2"]}`}
                                        >
                                            A BREATH OF FRESH AIR
                                        </p>
                                        <div
                                            className={`${styles["u-social-icons"]} ${styles["u-spacing-27"]} ${homeStyles["u-social-icons-1"]}`}
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="500"
                                            data-animation-delay="0"
                                            data-animation-direction=""
                                        >
                                            <a
                                                className={`${styles["u-social-url"]}`}
                                                target="_blank"
                                                href="https://www.facebook.com/Datri-Plants-109500008495326"
                                                rel="noreferrer"
                                            >
                                                <span
                                                    className={`${styles["u-icon"]} ${styles["u-icon-circle"]} ${styles["u-social-icon"]} ${styles["u-social-facebook"]} ${styles["u-icon-1"]}`}
                                                >
                                                    <svg
                                                        className={`${styles["u-svg-link"]}`}
                                                        preserveAspectRatio="xMidYMin slice"
                                                        viewBox="0 0 112 112"
                                                    >
                                                        <use
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="#svg-832d"
                                                        ></use>
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        version="1.1"
                                                        xmlSpace="preserve"
                                                        className={`${styles["u-svg-content"]}`}
                                                        viewBox="0 0 112 112"
                                                        x="0px"
                                                        y="0px"
                                                        id="svg-832d"
                                                    >
                                                        <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path>
                                                    </svg>
                                                </span>
                                            </a><a
                                            href=""
                                            className={`${styles["u-social-url"]}`}
                                            title="twitter"
                                            target="_blank"
                                          >
                                            <span
                                              className={`${styles["u-icon"]} ${styles["u-social-twitter"]} ${styles["u-social-icon"]} ${styles["u-icon-5"]}`}
                                            >
                                              <svg
                                                className={`${styles["u-svg-link"]}`}
                                                preserveAspectRatio="xMidYMin slice"
                                                viewBox="0 0 112 112"
                                              >
                                                <use
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  xlinkHref="#svg-4d93"
                                                ></use>
                                              </svg>
                                              <svg
                                                className={`${styles["u-svg-content"]}`}
                                                viewBox="0 0 112 112"
                                                x="0"
                                                y="0"
                                                id="svg-4d93"
                                              >
                                                
                                                <path
                                                  fill="#FFFFFF"
                                                  d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
                                                  c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
                                                  c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
                                                  c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
                                                  c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                                                ></path>
                                              </svg>
                                            </span>
                                          </a>
                                            <a
                                                className={`${styles["u-social-url"]}`}
                                                target="_blank"
                                                href="https://www.instagram.com/datriplants/"
                                                rel="noreferrer"
                                            >
                                                <span
                                                    className={`${styles["u-icon"]} ${styles["u-icon-circle"]} ${styles["u-social-icon"]} ${styles["u-social-instagram"]} ${styles["u-icon-2"]}`}
                                                >
                                                    <svg
                                                        className={`${styles["u-svg-link"]}`}
                                                        preserveAspectRatio="xMidYMin slice"
                                                        viewBox="0 0 112 112"
                                                    >
                                                        <use
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="#svg-70aa"
                                                        ></use>
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        version="1.1"
                                                        xmlSpace="preserve"
                                                        className={`${styles["u-svg-content"]}`}
                                                        viewBox="0 0 112 112"
                                                        x="0px"
                                                        y="0px"
                                                        id="svg-70aa"
                                                    >
                                                        <path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path>
                                                        <path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path>
                                                        <path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a
                        href=""
                        className={`${styles["u-social-url"]}`}
                        data-type="Google Plus"
                        title="Google Plus"
                        target="_blank"
                      >
                        <span
                          className={`${styles["u-icon"]} ${styles["u-social-google"]} ${styles["u-social-icon"]} ${styles["u-icon-8"]}`}
                        >
                          <svg
                            className={`${styles["u-svg-link"]}`}
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-7ab2"
                            ></use>
                          </svg>
                          <svg
                            className={`${styles["u-svg-content"]}`}
                            viewBox="0 0 112 112"
                            x="0"
                            y="0"
                            id="svg-7ab2"
                          >
                    
                            <path
                              fill="#FFFFFF"
                              d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
                              c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
                              c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
                              C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
                              c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
                              c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <a
                        href=""
                        className={`${styles["u-social-url"]}`}
                        data-type="Pinterest"
                        title="Pinterest"
                        target="_blank"
                      >
                        <span
                          className={`${styles["u-icon"]} ${styles["u-social-pinterest"]} ${styles["u-social-icon"]} ${styles["u-icon-5"]}`}
                        >
                          <svg
                            className={`${styles["u-svg-link"]}`}
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-5d86"
                            ></use>
                          </svg>
                          <svg
                            className={`${styles["u-svg-content"]}`}
                            viewBox="0 0 112 112"
                            x="0"
                            y="0"
                            id="svg-5d86"
                          >
                    
                            <path
                              fill="#FFFFFF"
                              d="M61.9,79.8c-5.5-0.3-7.8-3.1-12-5.8c-2.3,12.4-5.4,24.3-13.8,30.5c-2.6-18.7,3.8-32.8,6.9-47.7 c-5.1-8.7,0.7-26.2,11.5-21.9c13.5,5.4-11.6,32.3,5.1,35.7c17.6,3.5,24.7-30.5,13.8-41.4c-15.7-16.1-45.7-0.5-42,22.3 c0.9,5.6,6.7,7.2,2.3,15c-10.1-2.2-13-10.2-12.7-20.7c0.6-17.3,15.5-29.3,30.5-31.1c19-2.2,36.8,6.9,39.2,24.7 C93.4,59.5,82.3,81.3,61.9,79.8z"
                            ></path>
                          </svg>
                        </span>
                      </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
  
        </div>
      </div>
    </header>
  );
}