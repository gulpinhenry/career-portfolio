import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm('xqknaqqw');
    if (state.succeeded) {
        return <div>Message Sent!</div>;
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <h3>Quick Contact Form</h3>
            <input type="text" name="name" id="name" placeholder="Name" required=""></input>
            <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Your Message..."
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button id="submit-btn" type="submit" disabled={state.submitting}>Submit</button>
        </form>
    )
}
export default function Contact() {
    return (
        <div id="contact-container">
            <div id="contact-aside">
                <h3>
                    Open to Jobs and Internships!
                </h3>
                <p>
                    Based in San Fransisco Bay Area and New York City. Contact me at h3nrykam@gmail.com.
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.0812743802476!2d-73.98876768428792!3d40.69420764664011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4a4d8396f3%3A0xda9b313d596491f7!2sNew%20York%20University%20Tandon%20School%20of%20Engineering!5e0!3m2!1sen!2sus!4v1641170139280!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <Form />
        </div>
    );
}