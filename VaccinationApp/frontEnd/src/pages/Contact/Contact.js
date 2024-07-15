

import React from "react";
import classes from './Contact.module.css';

const Contact = () => {
    return(
        <>
            <div className={classes.contact}>
                <h2 >NVAC HEALTH OFFICE</h2>
                <p > 
                    <em>935 Market Street, Yuba City, CA 95991</em>
                    <br />
                    P:
                    <em>
                        <strong><a href="tel:(714) 900-9000">(714) 900-9000</a></strong>
                    </em>
                </p>
                <p style={{ textAlign: "center" }}></p>
            </div>
            <div className={classes.imageDiv}>
            <img
    width="1000"
    height="665"
    src="https://www.amplahealth.org/wp-content/uploads/AMPLA-HEALTH-CORPORATE-OFFICES-1000px.jpg"
    className="attachment-large size-large" // Change 'class' to 'className' here
    alt=""
    decoding="async"
    fetchpriority="high"
    srcSet="https://www.amplahealth.org/wp-content/uploads/AMPLA-HEALTH-CORPORATE-OFFICES-1000px.jpg 1000w, https://www.amplahealth.org/wp-content/uploads/AMPLA-HEALTH-CORPORATE-OFFICES-1000px-300x200.jpg 300w, https://www.amplahealth.org/wp-content/uploads/AMPLA-HEALTH-CORPORATE-OFFICES-1000px-600x399.jpg 600w"
    sizes="(max-width: 1000px) 100vw, 1000px"
/>
            </div>
        </>
    )
}

export default Contact;