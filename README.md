# Web Final Project – Events.com

## Project Overview:

**Events.com** is a multi-page responsive web application developed as part of the *Web Technologies 1 (Front-End)* course. The project serves as a platform for users to browse, explore, and register for various live events. It demonstrates key front-end development concepts, including semantic HTML, responsive design, client-side validation, JavaScript interactivity, and integration with public APIs.

---

## Pages and Responsibilities

| Page | Developer | Description |
| --- | --- | --- |
| intro.html | Aiym | Homepage containing introductory content, responsive design, and CTA layout |
| tickets.html | Aiym | Ticket booking interface with comparison tools and form validation |
| contact.html | Aiym | Contact form with file upload, speech-to-text functionality, and feedback |
| events.html | Balausa | Dynamic listing of events using API data and filter mechanisms |
| login.html | Balausa | Login and registration form with toggling UI and visual transitions |
| categories.html | Balausa | Event categorization with mobile-friendly layout and navigation |

---

## Setup Instructions

To run the project locally:

1. Open the index.html file in a modern web browser
2. Use the top navigation menu to explore all linked pages
3. The site is fully functional on both desktop and mobile devices
4. External APIs are utilized to retrieve and display data
5. Live chat integration (Tawk.to) is available for support simulation

---

## Technologies and Concepts Implemented

### HTML & CSS:

- Semantic HTML5 elements for accessible structure
- CSS Flexbox and Grid for layout management
- Media queries following a mobile-first approach
- Adaptive design for various resolutions

### JavaScript:

- Modular and reusable event listeners
- Form validation using JavaScript and HTML5 attributes
- DOM manipulation using querySelector, classList, innerHTML, etc.
- Speech recognition API for voice input (contact page)
- File upload with preview functionality
- API integration using fetch() and error handling

### APIs:

- Public API usage (e.g., JSONPlaceholder, OpenWeather) for dynamic content
- Asynchronous data fetching using async/await
- Graceful error handling and fallback messaging

---

## Responsiveness and Browser Compatibility

The application is fully responsive and adheres to modern design principles. It has been tested across the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

Compatibility has been verified for the following device types:

- Desktop monitors
- Tablets
- Mobile smartphones

---

## Forms and Validation

All forms implement client-side validation techniques to ensure correct data submission. This includes:

- Required field enforcement
- Pattern matching for emails and phone numbers
- Minimum and maximum character restrictions
- File type validation and media preview
- Real-time user feedback for invalid input

---

## Performance and Optimization

- Usage of .webp and .svg image formats for performance
- Lazy loading of images using the loading="lazy" attribute
- Clean and optimized code with comments for clarity
- Elimination of redundant or assignment-specific code
- Organized folder structure and consistent styling

---

## Deployment

The project is deployed and publicly accessible at the following URL:

- https://balau7.github.io/event_registration_platform/

---

## Contributors

This project was developed by:

- Aiym — responsible for the implementation of intro.html, tickets.html, and contact.html
- Balausa — responsible for the development of events.html, login.html, and categories.html
