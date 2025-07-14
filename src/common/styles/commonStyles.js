export const getCommonStyles = (theme) => ({
  pageContainer: {
    minHeight: '100vh',
    py: 6,
    bgcolor: 'background.default',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
  },
  card: {
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
        : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 2,
    boxShadow:
      theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});
