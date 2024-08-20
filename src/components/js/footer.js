import React from 'react';
import '../css/footer.css'; // Import the CSS for footer styling

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Srinivas Likhith. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
