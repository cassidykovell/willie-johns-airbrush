"use client"
import "../assets/css/style.css"

const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <div className="about-intro">
          <h2 className="about-name">Willie John's Airbrush & Customs</h2>
          <p className="about-tagline">Where creativity meets craftsmanship!</p>
        </div>

        <div className="about-bio">
          <p>
            I'm <strong>Will Maloney</strong>, the artist and craftsman behind the airbrush and restoration work you see
            here. Based in Los Angeles, CA, I specialize in bringing new life to old surfaces while also creating bold,
            custom airbrush designs that fit my customer's needs.
          </p>

          <h3 className="about-section-title">Restoration</h3>
          <p>
            With a passion for precision and detail, I take pride in restoring vintage and classic objects—whether it's
            revitalizing faded signs or storefronts, breathing new life into a weathered statue, or refreshing a beloved
            piece of amusement park ephemera. My restoration work preserves the character and authenticity of each piece
            while enhancing its beauty and durability.
          </p>

          <h3 className="about-section-title">Custom Airbrush Art</h3>
          <p>
            On the creative side, I craft custom airbrush art and designs that turn ordinary surfaces into eye-catching
            statements of individuality. From custom bike helmets to one-of-a-kind garments, I work closely with my
            clients to capture their vision and turn it into a striking, durable work of art.
          </p>

          <h3 className="about-section-title">My Approach</h3>
          <p>
            As a one-man operation, I handle every step of the process, from consultation to the final clear coat. This
            hands-on approach ensures that each piece meets my high standards of quality and craftsmanship.
          </p>

          <div className="about-closing">
            <p>
              Thanks for supporting local, handcrafted art and restoration. Feel free to reach out through the Contact
              Me tab. <strong>All consultations are 100% free.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for the About Me page */}
      <style jsx="true">{`
        .about-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          line-height: 1.6;
        }
        
        .about-content {
          background-color: white;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .about-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 30px;
          color: #333;
          padding-left: 0 !important;
        }
        
        .about-intro {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .about-name {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #444;
        }
        
        .about-tagline {
          font-size: 1.2rem;
          color: #666;
          font-style: italic;
          margin-bottom: 0;
        }
        
        .about-bio p {
          margin-bottom: 20px;
          font-size: 1.05rem;
          color: #555;
          line-height: 1.7;
          display: block;
          text-align: left;
        }
        
        .about-section-title {
          font-size: 1.4rem;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #444;
          border-left: 4px solid #666;
          padding-left: 15px;
        }
        
        .about-closing {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .about-closing p {
          font-size: 1.1rem;
        }
        
        @media (max-width: 600px) {
          .about-content {
            padding: 25px;
          }
          
          .about-title {
            font-size: 2rem;
          }
          
          .about-name {
            font-size: 1.5rem;
          }
          
          .about-bio p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutMe
