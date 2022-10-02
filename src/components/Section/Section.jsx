import classNames from 'classnames';
import React from 'react';

const Section = ({ children, dark, backgroundVideo, autoHeight }) => {
    const sectionClasses = classNames({
        section: true,
        'section--dark': dark,
        'fp-auto-height': autoHeight
    });
    const videoClasses = classNames({
        'video-hero': true
    });
    return (
        <div className={sectionClasses}>
            {backgroundVideo && (
                <video
                    className={videoClasses}
                    autoPlay
                    muted
                    loop
                    data-keepplaying
                >
                    <source src={backgroundVideo} type='video/mp4' />
                </video>
            )}
            {children}
        </div>
    );
};
export default Section;
