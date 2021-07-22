import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

function ContactForm() {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contact">
            <h1>Contact</h1>
            <div className="contact-info">
                <h4 data-testid="contact">Contact Info</h4>
                <address>
                    Phone: <a href="tel:+12813006033">281.300.6033</a><br />
                    Email: <a href="mailto:angela.k.man@gmail.com">angela.k.man@gmail.com</a><br />
                    Website: <a href="https://akman47.github.io/portfolio">GitHub</a><br />
                    Resume: <a href="https://linkedin.com/in/angela-man-b8533a6b/">LinkedIn</a><br />
                    Location: Houston, TX USA
                </address>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <h4>Leave a message</h4>
                <div className="contact-form">
                    <input type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="contact-form">
                    <input type="text" name="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="contact-form">
                    <textarea name="message" rows="5" placeholder="Message" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="btn" className="btn" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;