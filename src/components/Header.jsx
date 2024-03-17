// Import the Navigation component from './Navigation'
import Navigation from './Navigation';

// Header component receives currentPage and handlePageChange as props
function Header({ currentPage, handlePageChange }) {
    // Return JSX for the header section
    return (
        <header>
            {/* Header title */}
            <h1>Gary Harris Jr</h1>
            {/* Render the Navigation component with props */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

// Export the Header component as default
export default Header;
