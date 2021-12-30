import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm('xqknaqqw');
    if (state.succeeded) {
        return <div>Message Sent!</div>;
    }
    return (
        <form id = "contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    )
}
export default function Contact() {
    return (
        <div id = "contact-container">
            <div id="contact-aside">
                <h3>
                    Open to Jobs and Internships!
                </h3>
                <p>
                    Based in San Fransisco Bay Area and New York City. Contact me at h3nrykam@gmail.com.
                </p>
            </div>
            <Form/>
        </div>
    );
}