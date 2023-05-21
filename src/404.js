// Check if the URL is invalid and redirect to the 404 page
function handleInvalidURL() {
  const validURLs = ['/','/1.0.0.html','/404.html','/backups/week1']; // Replace with your valid URLs

  const currentURL = window.location.pathname;

  if (!validURLs.includes(currentURL)) {
    // Redirect to the custom 404 page
    window.location.href = '/404.html'; // Replace with the path to your custom 404 page
  }
}

// Call the function to handle the initial URL on page load
handleInvalidURL();