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
            <form id="contact-form" onSubmit={handleSubmit}>
                <h4>Leave a message</h4>
                    <input type="text" name="name" placeholder="Name" className="form-input" defaultValue={name} onBlur={handleChange} />
                    <input type="text" name="email" placeholder="Email" className="form-input" defaultValue={email} onBlur={handleChange} />
                    <textarea name="message" rows="5" placeholder="Message" className="form-input" defaultValue={message} onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="btn" className="btn" type="submit">Submit</button>
            </form>
            <div className="contact-info">
                <h4 data-testid="contact">Contact Information</h4>
                <div>
                    Phone: <a href="tel:+12813006033">281.300.6033</a><br />
                    Email: <a href="mailto:angela.k.man@gmail.com">angela.k.man@gmail.com</a><br />
                    Location: Houston, TX USA
                </div>
            </div>  
        </section>
    );
}

export default ContactForm;