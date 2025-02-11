import React, { useEffect, useState } from 'react';

const ContactUs = () => {

    useEffect(() => {
        document.title = "ContactUs | GadgetPulse"; 
      }, []);


    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, form data would be sent to a server here
        console.log("Form Submitted", formData);
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };


    return (
        <div>

<div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            {formSubmitted && (
                <p className="text-green-500 text-center mb-4">Thank you for reaching out! We'll get back to you soon.</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
        </div>


            
        </div>
    );
};

export default ContactUs;