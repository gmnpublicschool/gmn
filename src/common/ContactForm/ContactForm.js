import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.subject) {
      errors.subject = 'Please enter a subject';
    }
    if (!formData.message) {
      errors.message = 'Please enter your message';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    emailjs
      .sendForm('service_r9v7leg', 'template_0rtyevi', form.current, {
        publicKey: 'XAgemPXSHST71EBim',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage("You data have sended To G. M. N. Public school");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div>
      <div id="success">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
      <form ref={form} name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            // value={formData.name}
            // onChange={handleChange}
            required
            data-validation-required-message="Please enter your name"
          />
          <p className="help-block text-danger">{formErrors.name}</p>
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Your mobile No."
            // value={formData.name}
            // onChange={handleChange}
            required
            data-validation-required-message="Please enter your mobile No."
          />
          <p className="help-block text-danger">{formErrors.mobile}</p>
        </div>
        <div className="control-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email"
            // value={formData.email}
            // onChange={handleChange}
            required
            data-validation-required-message="Please enter your email"
          />
          <p className="help-block text-danger">{formErrors.email}</p>
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
            // value={formData.subject}
            // onChange={handleChange}
            required
            data-validation-required-message="Please enter a subject"
          />
          <p className="help-block text-danger">{formErrors.subject}</p>
        </div>
        <div className="control-group">
          <textarea
            className="form-control"
            rows="6"
            id="message"
            name="message"
            placeholder="Message"
            // value={formData.message}
            // onChange={handleChange}
            required
            data-validation-required-message="Please enter your message"
          />
          <p className="help-block text-danger">{formErrors.message}</p>
        </div>
        <div>
          <button className="btn btn-gmn py-2 px-4" type="submit" id="sendMessageButton" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
