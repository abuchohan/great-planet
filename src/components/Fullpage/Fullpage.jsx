import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

import video from '../Fullpage/mp4-h264-aac-1920_1080.mp4';
import videoAlt from '../Fullpage/mp4-h264-aac-1920_1080a.mp4';

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        scrollOverflow={false}
        anchors={[ 'one', 'two', 'three', 'four' ]}
        scrollBar={true}
        responsiveHeight
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <Section backgroundVideo={video} />
                    <Section>
                        <div className='section-content'>
                            <p className='fade-in content-p'>
                                The future is in our hands. We’re creating
                                solutions to help the Earth thrive — for all of
                                us.
                            </p>
                        </div>
                    </Section>
                    <Section dark>
                        <p style={{ color: 'white' }}>
                            {' '}
                            Section content incoming{' '}
                        </p>
                    </Section>
                    <Section>
                        <div className='section-content'>
                            <p className='body-content'>
                                While we’re building our home on the internet,
                                now that you’re here… why don’t you take a
                                moment to have a break? Here’s pianist Paul
                                Burton playing a rendition of Debussy’s Clair de
                                Lune for an 80-year-old elephant in Thailand. 👇
                            </p>

                            <video controls className='video-embed'>
                                <source src={videoAlt} type='video/mp4' />
                            </video>

                            <div class='m-scroll'>
                                <div class='m-scroll--title'>
                                    <div>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
                                        </h1>
                                        <h1>
                                            <a href='/'>
                                                We're inventing tomorrow
                                            </a>
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
