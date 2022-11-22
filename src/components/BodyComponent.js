import React from "react";
import styles from "../nicepage.module.css";
import homeStyles from "../components/Home.module.css";

const BodyComponent = (props) => {
  return (
    <body className={`${styles["u-body"]} ${styles["u-xl-mode"]}`}>
      <section
        className={`${styles["u-clearfix"]} ${homeStyles["u-section-4"]}`}
        id="sec-02c5"
      >
        <div
          className={`${styles["u-clearfix"]} ${styles["u-sheet"]} ${styles["u-valign-middle"]} ${homeStyles["u-sheet-1"]}`}
        >
          <div
            className={`${styles["u-clearfix"]} ${styles["u-gutter-0"]} ${styles["u-layout-wrap"]} ${styles["u-layout-wrap-1"]}`}
          >
            <div className={`${styles["u-layout"]}`}>
              <div className={`${styles["u-layout-row"]}`}>
                <div
                  className={`${styles["u-align-center"]} ${styles["u-container-style"]} ${styles["u-layout-cell"]} ${styles["u-right-cell"]} ${styles["u-size-33"]} ${styles["u-white"]} ${styles["u-layout-cell-1"]}`}
                >
                  <div
                    className={`${styles["u-container-layout"]} ${styles["u-valign-top"]} ${styles["u-container-layout-1"]}`}
                  >
                    <h2
                      className={`${styles["u-custom-font"]} ${styles["u-font-montserrat"]} ${styles["u-text"]} ${styles["u-text-default"]} ${styles["u-text-1"]}`}
                    >
                      Contact Us
                    </h2>
                    <div
                      className={`${styles["u-form"]} ${styles["u-form-1"]}`}
                    >
                      <form
                        action="https://formspree.io/f/xrgjwbbe"
                        method="POST"
                        className={`${styles["u-clearfix"]} ${styles["u-form-spacing-15"]} ${styles["u-form-vertical"]} ${styles["u-inner-form"]}`}
                        style={{ padding: "0px" }}
                        source="custom"
                        name="form"
                      >
                        <div
                          className={`${styles["u-form-group"]} ${styles["u-form-name"]}`}
                        >
                          <label
                            for="name-daf4"
                            className={`${styles["u-label"]}`}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            id="name-daf4"
                            name="name"
                            className={`${styles["u-border-2"]} ${styles["u-border-no-left"]} ${styles["u-border-no-right"]} ${styles["u-border-no-top"]} ${styles["u-border-palette-3-base"]} ${styles["u-input"]} ${styles["u-input-rectangle"]} ${styles["u-white"]}`}
                            required=""
                          />
                        </div>
                        <div
                          className={`${styles["u-form-group"]} ${styles["u-form-email"]}`}
                        >
                          <label
                            for="email-daf4"
                            className={`${styles["u-label"]}`}
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter a valid email address"
                            id="email-daf4"
                            name="email"
                            className={`${styles["u-border-2"]} ${styles["u-border-no-left"]} ${styles["u-border-no-right"]} ${styles["u-border-no-top"]} ${styles["u-border-palette-3-base"]} ${styles["u-input"]} ${styles["u-input-rectangle"]} ${styles["u-white"]}`}
                            required=""
                          />
                        </div>
                        <div
                          className={`${styles["u-form-group"]} ${styles["u-form-message"]}`}
                        >
                          <label
                            for="message-daf4"
                            className={`${styles["u-label"]}`}
                          >
                            Message
                          </label>
                          <textarea
                            type="message"
                            placeholder=""
                            rows="4"
                            cols="50"
                            id="message-daf4"
                            name="email"
                            className={`${styles["u-border-2"]} ${styles["u-border-no-left"]} ${styles["u-border-no-right"]} ${styles["u-border-no-top"]} ${styles["u-border-palette-3-base"]} ${styles["u-input"]} ${styles["u-input-rectangle"]} ${styles["u-white"]}`}
                            required=""
                          />
                        </div>
                        <div
                          className={`${styles["u-form-group"]} ${styles["u-form-agree"]} ${styles["u-form-group-4"]}`}
                        >
                          <input
                            type="checkbox"
                            id="agree-f183"
                            name="agree"
                            className={`${styles["u-agree-checkbox"]}`}
                            required=""
                          />
                          <label
                            for="checkbox"
                            className={`${styles["u-label"]}`}
                          >
                            I accept the <a href="#">Terms of Service</a>
                          </label>
                        </div>
                        <div
                          className={`${styles["u-align-left"]} ${styles["u-form-group"]} ${styles["u-form-submit"]}`}
                        >
                          <a
                            href="#"
                            className={`${styles["u-active-palette-2-light-2"]} ${styles["u-border-none"]} ${styles["u-btn"]} ${styles["u-btn-round"]} ${styles["u-btn-submit"]} ${styles["u-button-style"]} ${styles["u-hover-palette-2-light-2"]} ${styles["u-palette-3-base"]} ${styles["u-radius-12"]} ${styles["u-btn-1"]}`}
                            required=""
                          >
                            {" "}
                            Submit
                          </a>
                          <input
                            type="submit"
                            value="submit"
                            className={`${styles["u-form-control-hidden"]}`}
                          ></input>
                        </div>
                        <div
                          className={`${styles["u-form-send-message"]} ${styles["u-form-send-success"]}`}
                        >
                          Thank you! Your message has been sent.
                        </div>
                        <div
                          className={`${styles["u-form-send-error"]} ${styles["u-form-send-message"]}`}
                        >
                          Unable to send your message. Please fix errors then
                          try again.
                        </div>
                        <input
                          type="hidden"
                          value=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles["u-align-center"]} ${styles["u-container-style"]} ${styles["u-image"]} ${styles["u-layout-cell"]} ${styles["u-size-27"]} ${homeStyles["u-image-1"]}`}
                  data-image-width="1280"
                  data-image-height="771"
                >
                  <div
                    className={`${styles["u-container-layout"]} ${styles["u-container-layout-2"]}`}
                  >
                  <h6 className={`${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles["u-text-default"]} ${styles["u-text-2"]}`}>
                    call us
                  </h6>
                  <p
                    className={`${styles["u-custom-font"]} ${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles["u-text-3"]}`}
                  >
                    91 - 7981926017
                    <br />
                  </p>
                  <h6
                    className={`${styles["u-custom-font"]} ${styles["u-heading-font"]} ${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles[" u-text-4"]}`}
                  >
                    EMAIL
                  </h6>
                  <p
                    className={`${styles["u-custom-font"]} ${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles["u-text-5"]}`}
                  >
                    <span style={{ fontSize: "1.25rem" }}>
                      sshortinetworks@gmail.com
                    </span>
                    <br />
                  </p>
                  <h6
                    className={`${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles["u-text-default"]} ${styles["u-text-6"]}`}
                  >
                  Our top services
                  </h6>
                  <p
                    className={`${styles["u-custom-font"]} ${styles["u-text"]} ${styles["u-text-body-alt-color"]} ${styles["u-text-7"]}`}
                  >
                    Indoor Plants
                    <br />
                    Best Packaging and Delivery&nbsp;&nbsp;
                    <br />
                  </p>
                  <h6
                    className={`${styles["u-text"]} ${styles["u-text-white"]} ${styles["u-text-8"]}`}
                  >
                    LOCATION
                  </h6>
                  <p
                    className={`${styles["u-custom-font"]} ${styles["u-font-lobster"]} ${styles["u-text-white"]} ${styles["u-text-9"]}`}
                  >
                    <span
                      className={`${styles["u-file-icon"]} ${styles["u-icon"]}`}
                    >
                      <image src="../images/535137.png" alt="" />
                    </span>
                    &nbsp;Kadiyam, Andhra Pradesh - 533126
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src="../src/images/535137.png" alt="" />
    </body>
  );
};
export default BodyComponent;
