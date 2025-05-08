"use client"

import { useState, useEffect } from "react"
import "../assets/css/style.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import all images directly 
import Rest1 from "../assets/images/rest1.jpg"
import Rest2 from "../assets/images/rest2.jpg"
import Rest3 from "../assets/images/rest3.jpg"
import Rest4 from "../assets/images/rest4.jpg"
import Rest5 from "../assets/images/rest5.jpg"
import Rest6 from "../assets/images/rest6.jpg"
import Art1 from "../assets/images/art1.jpg"
import Art2 from "../assets/images/art2.jpg"
import Art3 from "../assets/images/art3.jpg"
import Art4 from "../assets/images/art4.jpg"
import Art5 from "../assets/images/art5.jpg"
import Art6 from "../assets/images/art6.jpg"
import Cost1 from "../assets/images/cost1.jpg"
import Cost2 from "../assets/images/cost2.jpg"
import Cost3 from "../assets/images/cost3.jpg"
import Cost4 from "../assets/images/cost4.jpg"
import Cost5 from "../assets/images/cost5.jpg"
import Cost6 from "../assets/images/cost6.jpg"

const Portfolio = () => {
  // Group images by category
  const restorationImages = [Rest1, Rest2, Rest3, Rest4, Rest5, Rest6]
  const artworkImages = [Art1, Art2, Art3, Art4, Art5, Art6]
  const costumeImages = [Cost1, Cost2, Cost3, Cost4, Cost5, Cost6]

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine how many images to show based on screen size
  const getImagesPerView = () => {
    if (windowWidth < 768) {
      return 1 // Mobile: 1 image
    } else if (windowWidth < 992) {
      return 2 // Tablet: 2 images
    } else {
      return 3 // Desktop: 3 images
    }
  }

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>

      <Section title="Restoration" images={restorationImages} imagesPerView={getImagesPerView()} />
      <Section title="Artwork" images={artworkImages} imagesPerView={getImagesPerView()} />
      <Section title="Costumes" images={costumeImages} imagesPerView={getImagesPerView()} />

      {/* Custom CSS for the Portfolio page */}
      <style jsx="true">{`
        /* Base styles */
        .portfolio-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          box-sizing: border-box;
        }
        
        .portfolio-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
          color: #333;
          padding-left: 0 !important;
          line-height: 1.2;
        }
        
        .portfolio-section {
          margin-bottom: 80px;
          width: 100%;
        }
        
        .section-title {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 30px;
          color: #444;
          padding-left: 0 !important;
          position: relative;
          line-height: 1.3;
        }
        
        .section-title:after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          background-color: #666;
          margin: 15px auto 0;
        }
        
        /* Carousel container */
        .carousel-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }
        
        /* Image grid */
        .image-grid {
          display: flex;
          gap: 20px;
          width: 100%;
          transition: all 0.3s ease;
        }
        
        /* Image item */
        .image-item {
          flex: 1;
          min-width: 0; /* Allow shrinking below content size */
        }
        
        /* Image container */
        .image-container {
          width: 100%;
          background-color: #f3f4f6;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          height: 500px; /* Larger height for desktop */
        }
        
        /* Image */
        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Fill the container */
          display: block;
          margin: 0;
          padding: 0;
          border: none;
        }
        
        /* Navigation buttons */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s;
        }
        
        .nav-button:hover {
          background-color: rgba(255, 255, 255, 1);
        }
        
        .nav-button.prev {
          left: -15px;
        }
        
        .nav-button.next {
          right: -15px;
        }
        
        /* Page indicators */
        .page-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .indicator.active {
          background-color: #666;
        }
        
        /* Responsive styles */
        @media (max-width: 991px) {
          .image-container {
            height: 400px; /* Slightly smaller for tablets */
          }
          
          .portfolio-title {
            font-size: 2.2rem;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
          
          .nav-button {
            width: 45px;
            height: 45px;
          }
        }
        
        @media (max-width: 767px) {
          .portfolio-container {
            padding: 30px 15px;
          }
          
          .portfolio-section {
            margin-bottom: 60px;
          }
          
          .image-container {
            height: 350px; /* Smaller for mobile */
          }
          
          .portfolio-title {
            font-size: 1.8rem;
            margin-bottom: 30px;
          }
          
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }
          
          .nav-button {
            width: 40px;
            height: 40px;
          }
          
          .nav-button.prev {
            left: -10px;
          }
          
          .nav-button.next {
            right: -10px;
          }
        }
        
        @media (max-width: 480px) {
          .image-container {
            height: 300px; /* Even smaller for small phones */
          }
          
          .portfolio-title {
            font-size: 1.6rem;
          }
          
          .section-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  )
}

const Section = ({ title, images, imagesPerView }) => {
  // State to track the starting index of the current view
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate total number of possible starting positions
  const totalPositions = Math.max(0, images.length - imagesPerView) + 1

  // Get current visible images based on the sliding window approach
  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerView)

  // Handle previous click - slide window left
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return newIndex < 0 ? images.length - imagesPerView : newIndex
    })
  }

  // Handle next click - slide window right
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= images.length ? 0 : newIndex
    })
  }

  // Calculate which indicator should be active
  const getActiveIndicator = () => {
    if (images.length <= imagesPerView) return 0

    if (currentIndex > images.length - imagesPerView) {
      return 0
    }

    return currentIndex
  }

  // Reset index when images per view changes (screen resize)
  useEffect(() => {
    setCurrentIndex(0)
  }, [imagesPerView])

  return (
    <section className="portfolio-section">
      <h2 className="section-title">{title}</h2>

      <div className="carousel-container">
        {/* Navigation buttons */}
        {images.length > imagesPerView && (
          <>
            <button className="nav-button prev" onClick={handlePrevious} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>

            <button className="nav-button next" onClick={handleNext} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image grid */}
        <div className="image-grid">
          {visibleImages.map((image, index) => (
            <div key={`${currentIndex}-${index}`} className="image-item">
              <div className="image-container">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${title} image ${currentIndex + index + 1}`}
                  className="portfolio-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Page indicators */}
        {totalPositions > 1 && (
          <div className="page-indicators">
            {Array.from({ length: totalPositions }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`indicator ${index === getActiveIndicator() ? "active" : ""}`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === getActiveIndicator() ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
