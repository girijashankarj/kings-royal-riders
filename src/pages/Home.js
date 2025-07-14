import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import GroupIcon from '@mui/icons-material/Group';
import MapIcon from '@mui/icons-material/Map';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/asset-image-1-hero.jpg';
import { THEME } from '../common/config/constants';
import siteData from '../data/site.json';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Icon mapping
const IconMap = {
  DirectionsBikeIcon: DirectionsBikeIcon,
  GroupIcon: GroupIcon,
  MapIcon: MapIcon,
};

export default function Home() {
  const cardStyle = (theme) => ({
    background: theme.palette.mode === 'dark' ? THEME.gradients.card : THEME.gradients.cardLight,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 2,
    boxShadow:
      theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%',
    width: '100%',
  });

  const features = siteData.features.map((feature) => ({
    ...feature,
    icon: <DirectionsBikeIcon sx={{ fontSize: 40 }} />,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero section with dark overlay */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          },
        }}
      >
        {/* Hero image and content */}
        <Box
          component="img"
          src={heroImage}
          alt="King's Royal Riders"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            width: '100%',
            px: 2,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <MotionBox
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 'bold',
                      background: THEME.gradients.text,
                    }}
                  >
                    {siteData.home.title}
                  </Typography>
                  <Typography variant="h4" sx={{ color: THEME.colors.text.secondary, mt: 2 }}>
                    {siteData.home.tagline}
                  </Typography>
                  <Button
                    component={Link}
                    to="/events"
                    variant="contained"
                    size="large"
                    sx={{
                      background: THEME.gradients.button,
                      '&:hover': {
                        background: THEME.gradients.buttonHover,
                      },
                      mr: 2,
                      mb: { xs: 2, md: 0 },
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    {siteData.home.actions.joinRide}
                  </Button>
                  <Button
                    component={Link}
                    to="/community"
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    {siteData.home.actions.meetRiders}
                  </Button>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Mission section */}
      <Box
        sx={{
          py: 8,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(20,20,20,0.98))'
              : 'linear-gradient(to bottom, rgba(248,249,250,0.95), rgba(255,255,255,0.98))',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 4,
                }}
              >
                {siteData.mission.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontStyle: 'italic',
                }}
              >
                "{siteData.mission.statement}"
              </Typography>
            </Grid>
          </Grid>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            component={Grid}
            container
            spacing={4}
            sx={{
              width: '100%',
              margin: 0,
            }}
          >
            {features.map((feature) => (
              <Grid
                item
                xs={12}
                md={4}
                key={feature.title}
                sx={{
                  width: '100%',
                  display: 'flex',
                }}
              >
                <MotionCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={(theme) => ({
                    ...cardStyle(theme),
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  })}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        transform: 'rotate(-15deg)',
                      }}
                    >
                      {IconMap[feature.icon]}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: 'text.primary', fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', flex: 1 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* Story section with parallax background */}
      <Box
        sx={{
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/kings-royal-riders/images/rides/lonavala.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: (theme) =>
              theme.palette.mode === 'dark' ? 'brightness(0.2)' : 'brightness(0.4)',
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  It all started in the fall of 2012 when a group of friends in Pune, with a sense
                  of freedom, a love for their machines, and a burning passion to ride and explore,
                  decided to take their passion to another level. A Ride to conquer The Great
                  Himalayas on their Enfield motorcycles helped conceive the idea of forming a club
                  which would get people with similar passion come together and celebrate and
                  cherish an everlasting bond called "Brotherhood".
                </Typography>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                  }}
                >
                  Learn More About Us
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
