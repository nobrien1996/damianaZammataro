import React from "react";
import emailjs from "@emailjs/browser";
import Header from "../header-footer/Header.jsx";
import Footer from "../header-footer/Footer.jsx";
import "../../css/style.css";

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // null - "sending" - "success" - "error"
    const [errors, setErrors] = useState({});

    const validate = (fields) => {
        const newErrors = {};
        if (!fields.name.trim()) newErrors.name = "Name is required";
        if (!fields.subject.trim()) newErrors.subject = "Subject is required";
        if (!fields.message.trim()) newErrors.message = "Message is required";
        if (!fields.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const fields = {
            name: form.user_name.value,
            email: form.user_email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        const validationErrors = validate(fields);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setStatus("sending");

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setStatus("success");
                form.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <div>

            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*Page content*/}
            <div className="contact-container">
                <h1 className="contact-heading">Contact Me</h1>
                <p className="contact-subheading">Have a question or want to work together? Send me a message.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>

                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Your name"
                            className={errors.name ? "input-error" : ""}
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="your@email.com"
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What's this about?"
                            className={errors.subject ? "input-error" : ""}
                        />
                        {errors.subject && <span className="error-msg">{errors.subject}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your message"
                            className={errors.message ? "input-error" : ""}
                        />
                        {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="form-status success">Your message was sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="form-status error">Something went wrong. Please try again</p>
                    )}
                </form>
            </div>

            {/*Page footer*/}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;