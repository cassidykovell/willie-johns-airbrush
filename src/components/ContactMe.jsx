"use client"
import { useState } from "react"
import "../assets/css/style.css"
import { Mail, Phone, Send, MapPin, Clock } from "lucide-react"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally connect to your backend or email service
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! I'll get back to you soon.",
    })

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>

        <div className="contact-info-container">
          <div className="contact-info">
            <h2 className="contact-subtitle">Contact Information</h2>
            <p className="contact-description">
              Have a project in mind or need a restoration quote? Reach out and let's discuss how I can help bring your
              vision to life.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail className="contact-icon" size={20} />
                <div>
                  <h3 className="contact-detail-title">Email</h3>
                  <p className="contact-detail-text">williejohnsairbrush@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Phone className="contact-icon" size={20} />
                <div>
                  <h3 className="contact-detail-title">Phone</h3>
                  <p className="contact-detail-text">(650) 808-5860</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <MapPin className="contact-icon" size={20} />
                <div>
                  <h3 className="contact-detail-title">Location</h3>
                  <p className="contact-detail-text">Los Angeles, CA</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Clock className="contact-icon" size={20} />
                <div>
                  <h3 className="contact-detail-title">Business Hours</h3>
                  <p className="contact-detail-text">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="contact-reminder">
              <p>
                <strong>Remember:</strong> All consultations are 100% free!
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2 className="contact-subtitle">Send a Message</h2>

            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced responsive CSS for all devices */}
      <style jsx="true">{`
        /* Base styles */
        .contact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          box-sizing: border-box;
        }
        
        .contact-content {
          background-color: white;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
        }
        
        .contact-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
          color: #333;
          padding-left: 0 !important;
          line-height: 1.2;
          word-wrap: break-word;
        }
        
        .contact-info-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          width: 100%;
        }
        
        .contact-info {
          flex: 1;
          min-width: 300px;
          box-sizing: border-box;
        }
        
        .contact-form-container {
          flex: 1;
          min-width: 300px;
          box-sizing: border-box;
        }
        
        .contact-subtitle {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #444;
          position: relative;
          padding-bottom: 10px;
          line-height: 1.3;
          word-wrap: break-word;
        }
        
        .contact-subtitle:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: #666;
        }
        
        .contact-description {
          margin-bottom: 30px;
          color: #555;
          line-height: 1.6;
          display: block;
          text-align: left;
          word-wrap: break-word;
        }
        
        .contact-details {
          margin-bottom: 30px;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: nowrap;
        }
        
        .contact-icon {
          margin-right: 15px;
          color: #555;
          min-width: 20px;
          flex-shrink: 0;
        }
        
        .contact-detail-title {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #444;
          line-height: 1.3;
        }
        
        .contact-detail-text {
          color: #666;
          margin: 0;
          display: block;
          text-align: left;
          word-wrap: break-word;
          line-height: 1.4;
        }
        
        .contact-reminder {
          padding: 15px;
          background-color: #f8f8f8;
          border-left: 4px solid #666;
          margin-top: 20px;
          word-wrap: break-word;
        }
        
        .contact-reminder p {
          margin: 0;
          display: block;
          text-align: left;
          line-height: 1.5;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        
        .form-group label {
          margin-bottom: 8px;
          color: #555;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s;
          width: 100%;
          box-sizing: border-box;
          max-width: 100%;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #666;
          outline: none;
        }
        
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #555;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 10px;
          touch-action: manipulation;
        }
        
        .submit-button:hover {
          background-color: #444;
        }
        
        .form-success {
          text-align: center;
          padding: 30px;
          background-color: #f8f8f8;
          border-radius: 4px;
        }
        
        .success-icon {
          color: #4CAF50;
          margin-bottom: 20px;
        }
        
        /* Large Desktop (1200px and up) */
        @media (min-width: 1200px) {
          .contact-container {
            padding: 60px 20px;
          }
          
          .contact-content {
            padding: 50px;
          }
        }
        
        /* Desktop (992px to 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .contact-container {
            padding: 50px 20px;
          }
          
          .contact-content {
            padding: 40px;
          }
          
          .contact-title {
            font-size: 2.3rem;
          }
        }
        
        /* Tablet (768px to 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .contact-container {
            padding: 40px 20px;
          }
          
          .contact-content {
            padding: 35px;
          }
          
          .contact-title {
            font-size: 2.1rem;
            margin-bottom: 35px;
          }
          
          .contact-subtitle {
            font-size: 1.4rem;
          }
          
          .contact-info-container {
            gap: 30px;
          }
        }
        
        /* Small Tablet (576px to 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .contact-container {
            padding: 30px 15px;
          }
          
          .contact-content {
            padding: 30px;
          }
          
          .contact-title {
            font-size: 1.9rem;
            margin-bottom: 30px;
          }
          
          .contact-subtitle {
            font-size: 1.3rem;
          }
          
          .contact-info-container {
            flex-direction: column;
            gap: 30px;
          }
          
          .contact-info, .contact-form-container {
            width: 100%;
          }
          
          .submit-button {
            width: 100%;
          }
        }
        
        /* Mobile (575px and down) */
        @media (max-width: 575px) {
          .contact-container {
            padding: 20px 15px;
          }
          
          .contact-content {
            padding: 25px 20px;
            border-radius: 6px;
          }
          
          .contact-title {
            font-size: 1.7rem;
            margin-bottom: 25px;
          }
          
          .contact-subtitle {
            font-size: 1.2rem;
            margin-bottom: 15px;
          }
          
          .contact-info-container {
            flex-direction: column;
            gap: 25px;
          }
          
          .contact-info, .contact-form-container {
            width: 100%;
            min-width: 100%;
          }
          
          .contact-detail-item {
            margin-bottom: 15px;
          }
          
          .contact-detail-title {
            font-size: 1rem;
          }
          
          .contact-detail-text {
            font-size: 0.95rem;
          }
          
          .form-group {
            gap: 15px;
          }
          
          .form-group label {
            font-size: 0.95rem;
          }
          
          .form-group input,
          .form-group textarea {
            padding: 10px 12px;
            font-size: 0.95rem;
          }
          
          .submit-button {
            width: 100%;
            padding: 12px 15px;
            font-size: 0.95rem;
          }
          
          .contact-icon {
            margin-right: 10px;
          }
        }
        
        /* Very Small Mobile (320px and down) */
        @media (max-width: 320px) {
          .contact-content {
            padding: 20px 15px;
          }
          
          .contact-title {
            font-size: 1.5rem;
          }
          
          .contact-subtitle {
            font-size: 1.1rem;
          }
          
          .contact-detail-title {
            font-size: 0.95rem;
          }
          
          .contact-detail-text {
            font-size: 0.9rem;
          }
          
          .form-group input,
          .form-group textarea {
            padding: 8px 10px;
            font-size: 0.9rem;
          }
        }
        
        /* Landscape orientation adjustments for mobile */
        @media (max-width: 767px) and (orientation: landscape) {
          .contact-info-container {
            flex-direction: row;
          }
          
          .contact-info, .contact-form-container {
            min-width: 0;
            flex: 1;
          }
        }
        
        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .contact-content {
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
          }
        }
        
        /* Print styles */
        @media print {
          .contact-container {
            padding: 0;
          }
          
          .contact-content {
            box-shadow: none;
            border: 1px solid #ddd;
          }
          
          .submit-button {
            display: none;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactMe
