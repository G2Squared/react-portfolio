import Header from './Header'; // Importing Header component
import Footer from './Footer'; // Importing Footer component

import AboutMe from './contentPages/AboutMe'; // Importing AboutMe page component
import Contact from './contentPages/Contact'; // Importing Contact page component
import Portfolio from './contentPages/Portfolio'; // Importing Portfolio page component
import Resume from './contentPages/Resume'; // Importing Resume page component

import { useState } from 'react'; // Importing useState hook from React

function Main() {

  const [currentPage, setCurrentPage] = useState('AboutMe'); // State to track current page

  // Function to render the appropriate page based on the current state
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // Function to handle page change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Header component with props */}
      <main>
        {renderPage()} {/* Render the current page */}
      </main>

      <Footer /> {/* Footer component */}
    </div>
  );
}

export default Main; // Exporting Main component
