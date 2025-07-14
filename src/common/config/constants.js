// App Information moved to site.json

// Theme Constants
export const THEME = {
  colors: {
    primary: {
      main: '#E53935',
      light: '#FF6B6B',
      dark: '#AB000D',
    },
    secondary: {
      main: '#1A237E',
      light: '#534AA0',
      dark: '#000051',
    },
    background: {
      default: '#0A0A0A',
      paper: '#121212',
      gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(20,20,20,0.95))',
      light: {
        default: '#F8F9FA',
        paper: '#FFFFFF',
        gradient: 'linear-gradient(to bottom, #F8F9FA, #FFFFFF)',
      },
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8C4B3',
      light: {
        primary: '#2D3436',
        secondary: '#636E72',
      },
    },
  },
  gradients: {
    text: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
    button: 'linear-gradient(45deg, #E53935 30%, #FF6B6B 90%)',
    buttonHover: 'linear-gradient(45deg, #FF6B6B 30%, #E53935 90%)',
    card: 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)',
    cardLight: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,249,250,0.9) 100%)',
  },
  typography: {
    FONT_FAMILY: "'Rajdhani', sans-serif",
    FONT_SIZE: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      body1: '1rem',
      body2: '0.875rem',
    },
    FONT_WEIGHT: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: {
    buttonPadding: '12px 30px',
    borderRadius: 4,
  },
  shadows: {
    button: '0 3px 15px 2px rgba(212, 32, 44, 0.4)',
    card: '0 10px 20px rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    default: 'all 0.3s ease-out',
  },
};

// Page Titles and Headers
export const PAGE_TITLES = {
  HOME: 'Home',
  ABOUT: 'About Us',
  EVENTS: 'Upcoming Rides',
  PAST_EVENTS: 'Past Rides',
  COMMUNITY: 'Our Community',
  GALLERY: 'Ride Gallery',
  CONTACT: 'Contact Us',
  FAQ: 'FAQs',
  HELP: 'Help & Support',
};

// Base Image Paths
export const IMAGE_PATHS = {
  logo: '/images/logo/logo.png',
  rides: {
    all: '/images/rides/',
    mulshi: '/images/rides/mulshi.jpg',
    lavasa: '/images/rides/lavasa.jpg',
    lonavala: '/images/rides/lonavala.jpg',
    default: '/images/rides/default-ride.jpg',
  },
  members: '/images/members/',
  assets: {
    hero: '/images/assets/asset-image-1-hero.jpg',
    vertical: '/images/assets/asset-image-2-vertical.jpg',
    landscape: '/images/assets/asset-image-3-landscape.jpg',
    background: '/images/assets/asset-image-4-background.jpg',
    bike: '/images/assets/asset-image-5-bike.jpg',
    ride: '/images/assets/asset-image-6-ride.jpg',
  },
};

// App configuration moved to site.json
