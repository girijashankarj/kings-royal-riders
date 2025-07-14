import { THEME } from '../common/config/constants';

export const getCommonStyles = (theme) => ({
  card: {
    background: theme.palette.mode === 'dark' ? THEME.gradients.card : THEME.gradients.cardLight,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 2,
    boxShadow:
      theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%', // Ensure full height
    display: 'flex',
    flexDirection: 'column',
  },
  pageContainer: {
    minHeight: '100vh',
    background: theme.palette.background.gradient,
    py: 6,
  },
  gradientSection: {
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(20,20,20,0.98))'
        : 'linear-gradient(to bottom, rgba(248,249,250,0.95), rgba(255,255,255,0.98))',
  },
  divider: {
    height: '1px',
    background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    my: 3,
  },
  button: {
    background:
      theme.palette.mode === 'dark'
        ? THEME.gradients.button
        : 'linear-gradient(45deg, #E53935 30%, #FF6B6B 90%)',
    color: '#FFFFFF',
    '&:hover': {
      background:
        theme.palette.mode === 'dark'
          ? THEME.gradients.buttonHover
          : 'linear-gradient(45deg, #FF6B6B 30%, #E53935 90%)',
    },
  },
  cardContent: {
    background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: 1,
  },
  heroOverlay: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)',
  },
  iconContainer: {
    color: 'primary.main',
    background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    borderRadius: '50%',
    p: 1,
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiPaper-root': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
});
