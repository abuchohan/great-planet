import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

import video from "../Fullpage/mp4-h264-aac-1920_1080.mp4";
import videoAlt from "../Fullpage/mp4-h264-aac-1920_1080a.mp4";

import img from "./principal1.jpg";
import imgAlt from "./spacex-1-rocket-road-hawthorne-costar.jpeg";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    scrollOverflow={false}
    anchors={["one", "two", "three", "four"]}
    scrollBar={true}
    responsiveHeight
    navigation
    showActiveTooltip
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Section backgroundVideo={video} />
          <Section>
            <div className="section-content">
              <p className="fade-in content-p" style={{fontSize: '2.5rem'}}>
                The future is in our hands. We’re creating solutions to help the
                Earth thrive — <span className="text-fill">for all of us.</span>
              </p>
            </div>
          </Section>
          <Section dark>
          <div className="section-content">
            <div className='contact-banner'>
              <div className='flex' >
                <div>📧</div>
                <p> hello@greatplanet.co</p>
              </div>
              <div className='flex'>
                <div>📞</div>
                <p>+44 (0)20 5437 123</p>
              </div>
            </div>
            <div className='information-section'>
              <div className='information-section-card'>
                <img src={img} alt="" />
                <p>GB</p>
                <p>
                  Great Planet Amazon UK Services Limited <br /> 1 Principal Place
                  <br /> Worship Street <br /> London <br /> EC2A 2FA <br /> United Kingdom
                </p>
              </div>
              <div className='information-section-card'>
                <img src={imgAlt} alt="" />
                <p>GB</p>
                <p>
                  Great Planet Amazon UK Services Limited <br /> 1 Principal Place
                  <br /> Worship Street <br /> London <br /> EC2A 2FA <br /> United Kingdom
                </p>
              </div>
            </div>
            </div>
            
          </Section>
          <Section>
            <div className="section-content">
              <p className="body-content">
                While we’re building our home on the internet, now that you’re
                here… why don’t you take a moment to have a break? Here’s
                pianist Paul Burton playing a rendition of Debussy’s Clair de
                Lune for an 80-year-old elephant in Thailand. 👇
              </p>

              <video controls className="video-embed">
                <source src={videoAlt} type="video/mp4" />
              </video>

              <div className="m-scroll">
                <div className="m-scroll--title">
                  <div>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                    <h1>
                      <a href="/">We're inventing tomorrow.</a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Footer />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
