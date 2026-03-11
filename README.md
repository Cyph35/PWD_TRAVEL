# PWD Travel - Barrier-Free Travel Platform

## Overview

PWD Travel is a comprehensive front-end prototype for a barrier-free travel platform designed specifically for persons with disabilities. The system provides accessible transportation booking, journey planning, and support services with a focus on inclusivity and ease of use.

## Features

### 🚀 Core Functionality
- **Barrier-Free Travel Booking** - 5-step booking process with PWD-certified drivers
- **AI-Powered Journey Planning** - Accessibility verification across 40+ safety metrics
- **Interactive Map Interface** - Location-based services with search and routing
- **Comprehensive Profile Management** - Disability details, emergency contacts, verification
- **Real-time Weather Integration** - Live weather data for trip planning
- **Booking History & Support** - Complete trip tracking and assistance

### ♿ Accessibility Features
- **Screen Reader Support** - Full ARIA labeling and semantic HTML
- **High Contrast Design** - Dark theme with excellent color contrast
- **Keyboard Navigation** - Complete keyboard accessibility
- **Large Touch Targets** - Mobile-friendly button sizing
- **Clear Visual Hierarchy** - Intuitive navigation and information architecture

## Technical Architecture

### Frontend Stack
- **HTML5** - Semantic markup with accessibility attributes
- **CSS3** - Custom properties, animations, responsive design
- **JavaScript (ES6+)** - Vanilla JS with modern features
- **Leaflet.js** - Interactive mapping functionality
- **Open-Meteo API** - Real-time weather data integration

### Code Organization

```
PWD-Travel/
├── index.html          # Main landing page
├── home.html           # Dashboard with booking system
├── profile.html        # User profile management
├── main.js            # Core JavaScript functionality
├── style.css          # Comprehensive styling
└── README.md          # This documentation
```

## System Components

### 1. Landing Page (index.html)
- Hero section with animated text effects
- Services overview with hover interactions
- Journey planner form
- Testimonials section
- Footer with contact information

### 2. Dashboard (home.html)
- **Interactive Map** - Search, location services, weather
- **Booking Modal** - 5-step booking process
- **Profile Management** - User information and settings
- **History Panel** - Booking history and details
- **Contact System** - Driver communication (calls/messages)

### 3. Profile Management (profile.html)
- Personal information forms
- Disability type selection
- Emergency contact setup
- Verification status tracking
- Profile completion progress

### 4. Booking System
**5-Step Process:**
1. **Trip Details** - Pickup/drop-off, date/time, disability type
2. **Personal Info** - Name, contact, assistance instructions
3. **Driver Selection** - Filtered driver list with ratings
4. **Fee Calculation** - Base fare + accessibility fees + add-ons
5. **Confirmation** - Summary and booking finalization

## Key Features Explained

### Accessibility Verification
The system automatically verifies routes for accessibility based on:
- Disability type (wheelchair, visual impairment, etc.)
- Distance calculations using OSRM routing
- Driver certification levels
- Real-time traffic and road conditions

### Fare Calculation System
Dynamic pricing based on:
- Base fare (₱50)
- Distance charge (₱12/km)
- Disability-specific care fees:
  - Wheelchair assistance: ₱40
  - Medical/mobility aid: ₱35
  - Sensory assistance: ₱30
  - Elderly care: ₱25
- Add-on services (priority boarding, equipment handling, etc.)

### Driver Matching Algorithm
Smart driver selection based on:
- Proximity to pickup location
- Certification for specific disability types
- Availability status
- User ratings and experience
- Specialized training qualifications

## Code Quality & Best Practices

### JavaScript Architecture
- **Event Delegation** - Efficient event handling
- **Modular Functions** - Reusable, focused functions
- **Error Handling** - Graceful fallbacks and user feedback
- **State Management** - LocalStorage for persistent data
- **API Integration** - Clean separation of external services

### CSS Architecture
- **Custom Properties** - Centralized color and spacing variables
- **Component-Based** - Reusable, modular styles
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Efficient animations and transitions
- **Accessibility Focused** - High contrast and clear visual hierarchy

### HTML Structure
- **Semantic Markup** - Proper use of semantic elements
- **Accessibility Attributes** - ARIA labels and roles
- **Progressive Enhancement** - Works without JavaScript
- **SEO Friendly** - Proper meta tags and structure

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML/CSS/JavaScript

### Running the Application
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate to `home.html` for the full dashboard experience
4. Use `profile.html` for profile management

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Development Guidelines

### Adding New Features
1. **Follow existing patterns** - Use established code structure
2. **Maintain accessibility** - Always consider PWD users
3. **Test responsiveness** - Ensure mobile compatibility
4. **Document changes** - Update this README for new features

### Code Style
- Use semantic HTML5 elements
- Follow CSS custom property naming conventions
- Maintain consistent JavaScript function naming
- Include accessibility attributes for all interactive elements

### Performance Considerations
- Minimize DOM manipulation
- Use efficient CSS selectors
- Implement lazy loading for images
- Optimize API calls with caching

## Accessibility Standards

### WCAG Compliance
- **Level AA** - Meets most Level AA requirements
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Complete ARIA implementation
- **Color Contrast** - Minimum 4.5:1 ratio maintained

### PWD-Specific Features
- **Large Touch Targets** - Minimum 44px touch areas
- **Clear Instructions** - Simple, direct language
- **Error Prevention** - Clear validation and error messages
- **Assistive Technology** - Compatible with common AT tools

## Future Enhancements

### Planned Features
- [ ] Backend API integration
- [ ] Real-time driver tracking
- [ ] Multi-language support
- [ ] Advanced accessibility settings
- [ ] Integration with public transport APIs
- [ ] Mobile app development

### Technical Improvements
- [ ] TypeScript migration
- [ ] Component-based architecture
- [ ] Unit testing implementation
- [ ] Performance optimization
- [ ] Progressive Web App features

## Troubleshooting

### Common Issues
1. **Map not loading** - Check internet connection and API keys
2. **Weather data unavailable** - Verify Open-Meteo API access
3. **Booking form validation** - Ensure all required fields are filled
4. **Profile save issues** - Check browser localStorage support

### Browser Developer Tools
Use browser developer tools to:
- Inspect element structure
- Monitor network requests
- Check console for JavaScript errors
- Test responsive design breakpoints

## Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Implement changes following code standards
4. Test accessibility features
5. Submit pull request with detailed description

### Code Review Checklist
- [ ] Accessibility requirements met
- [ ] Responsive design tested
- [ ] JavaScript functionality working
- [ ] CSS styling consistent
- [ ] Performance impact minimal
- [ ] Documentation updated

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions, issues, or feature requests:
- Create an issue in the repository
- Contact the development team
- Review the troubleshooting section above

---

**Built with ❤️ for the PWD community**

*This README was generated to help your team understand and maintain the PWD Travel system effectively.*