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

  // State to track screen size
  const [screenSize, setScreenSize] = useState("large")

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setScreenSize("small")
      } else if (window.innerWidth < 992) {
        setScreenSize("medium")
      } else {
        setScreenSize("large")
      }
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>

      <Section title="Restoration" images={restorationImages} screenSize={screenSize} />
      <Section title="Artwork" images={artworkImages} screenSize={screenSize} />
      <Section title="Costumes" images={costumeImages} screenSize={screenSize} />

      {/* Custom CSS for the Portfolio page */}
      <style jsx="true">{`
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
          margin-bottom: 60px;
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
        
        .image-grid {
          display: grid;
          gap: 20px;
          width: 100%;
        }
        
        /* Large screens - 3 images per row */
        .image-grid.large {
          grid-template-columns: repeat(3, 1fr);
        }
        
        /* Medium screens - 2 images per row */
        .image-grid.medium {
          grid-template-columns: repeat(2, 1fr);
        }
        
        /* Small screens - 1 image per row */
        .image-grid.small {
          grid-template-columns: 1fr;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 75%; /* 4:3 aspect ratio */
          background-color: #f3f4f6;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .portfolio-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          margin: 0;
          padding: 0;
          border: none;
        }
        
        .empty-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 1rem;
        }
        
        .nav-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          gap: 10px;
        }
        
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f3f4f6;
          border: 1px solid #ddd;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .nav-button:hover {
          background-color: #e5e7eb;
        }
        
        .nav-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
        
        .page-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 0 15px;
        }
        
        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
        }
        
        .indicator.active {
          background-color: #666;
        }
        
        .page-counter {
          text-align: center;
          margin-top: 10px;
          color: #666;
          font-size: 0.9rem;
        }
        
        /* Large Desktop (1200px and up) */
        @media (min-width: 1200px) {
          .portfolio-container {
            padding: 60px 20px;
          }
          
          .image-container {
            padding-bottom: 70%; /* Slightly shorter aspect ratio for large screens */
          }
        }
        
        /* Desktop (992px to 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .portfolio-title {
            font-size: 2.3rem;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
        }
        
        /* Tablet (768px to 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .portfolio-container {
            padding: 40px 20px;
          }
          
          .portfolio-title {
            font-size: 2.1rem;
            margin-bottom: 35px;
          }
          
          .section-title {
            font-size: 1.6rem;
            margin-bottom: 25px;
          }
          
          .portfolio-section {
            margin-bottom: 50px;
          }
        }
        
        /* Small Tablet (576px to 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .portfolio-container {
            padding: 30px 15px;
          }
          
          .portfolio-title {
            font-size: 1.9rem;
            margin-bottom: 30px;
          }
          
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
          }
          
          .portfolio-section {
            margin-bottom: 40px;
          }
          
          .image-container {
            padding-bottom: 80%; /* Taller aspect ratio for better visibility */
          }
        }
        
        /* Mobile (575px and down) */
        @media (max-width: 575px) {
          .portfolio-container {
            padding: 25px 15px;
          }
          
          .portfolio-title {
            font-size: 1.7rem;
            margin-bottom: 25px;
          }
          
          .section-title {
            font-size: 1.4rem;
            margin-bottom: 20px;
          }
          
          .portfolio-section {
            margin-bottom: 35px;
          }
          
          .image-container {
            padding-bottom: 85%; /* Even taller aspect ratio for mobile */
          }
          
          .nav-button {
            width: 36px;
            height: 36px;
          }
        }
        
        /* Very Small Mobile (320px and down) */
        @media (max-width: 320px) {
          .portfolio-title {
            font-size: 1.5rem;
          }
          
          .section-title {
            font-size: 1.3rem;
          }
          
          .image-container {
            padding-bottom: 90%; /* Almost square for very small screens */
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}

const Section = ({ title, images, screenSize }) => {
  // Determine how many images to show per page based on screen size
  const getImagesPerPage = () => {
    switch (screenSize) {
      case "small":
        return 1 // Mobile: 1 image
      case "medium":
        return 2 // Tablet: 2 images
      case "large":
      default:
        return 3 // Desktop: 3 images
    }
  }

  const imagesPerPage = getImagesPerPage()
  const [startIndex, setStartIndex] = useState(0)

  // Calculate the total number of pages
  const totalPages = Math.ceil(images.length / imagesPerPage)
  const currentPage = Math.floor(startIndex / imagesPerPage) + 1

  // Get the current set of images to display
  const currentImages = []
  for (let i = 0; i < imagesPerPage; i++) {
    const index = startIndex + i
    if (index < images.length) {
      currentImages.push(images[index])
    } else {
      currentImages.push(null)
    }
  }

  // Reset start index when screen size changes
  useEffect(() => {
    setStartIndex(0)
  }, [screenSize])

  const goToPrevious = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - imagesPerPage
      return newIndex < 0 ? Math.max(images.length - imagesPerPage, 0) : newIndex
    })
  }

  const goToNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + imagesPerPage
      return newIndex >= images.length ? 0 : newIndex
    })
  }

  const goToPage = (pageIndex) => {
    setStartIndex(pageIndex * imagesPerPage)
  }

  return (
    <section className="portfolio-section">
      <h2 className="section-title">{title}</h2>

      <div className={`image-grid ${screenSize}`}>
        {currentImages.map((image, index) => (
          <div key={index} className="image-container">
            {image ? (
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} image ${startIndex + index + 1}`}
                className="portfolio-image"
                loading="lazy"
              />
            ) : (
              <div className="empty-container">No image</div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {totalPages > 1 && (
        <div className="nav-container">
          <button onClick={goToPrevious} className="nav-button" aria-label="Previous images">
            <ChevronLeft size={20} />
          </button>

          <div className="page-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`indicator ${index === currentPage - 1 ? "active" : ""}`}
                aria-label={`Go to page ${index + 1}`}
                aria-current={index === currentPage - 1 ? "page" : undefined}
              />
            ))}
          </div>

          <button onClick={goToNext} className="nav-button" aria-label="Next images">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="page-counter">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </section>
  )
}

export default Portfolio
