import DateRangeIcon from '@mui/icons-material/DateRange';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IMAGE_PATHS } from '../common/config/constants';
import { THEME } from '../common/config/constants.js';
import { getCommonStyles } from '../common/styles/commonStyles.js';
import eventsData from '../data/events.json';
import siteData from '../data/site.json';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function Events() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  // Filter upcoming events that are after the current date
  const upcomingEvents = eventsData.upcoming.filter((event) => new Date(event.date) > new Date());

  const handleOpenRegistration = (event) => {
    setSelectedEvent(event);
    setRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setRegistrationOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Box sx={styles.pageContainer}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 6,
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              pl: 3,
            }}
          >
            <DirectionsBikeIcon sx={{ fontSize: 60, color: 'primary.main', mr: 2 }} />
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  background: THEME.gradients.text,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Upcoming Events
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                {siteData.events.upcoming.subtitle}
              </Typography>
            </Box>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            component={Grid}
            container
            spacing={3}
          >
            {upcomingEvents.map((event) => (
              <Grid item xs={12} key={event.id}>
                <MotionCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    ...styles.card,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box sx={{ position: 'relative', height: 240 }}>
                    <CardMedia
                      component="img"
                      image={event.image || IMAGE_PATHS.rides.default}
                      alt={event.title}
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      background: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                      {event.title}
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <DateRangeIcon sx={{ mr: 1 }} />
                          <Typography>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <LocationOnIcon sx={{ mr: 1 }} />
                          <Typography>{event.location}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <GroupIcon sx={{ mr: 1 }} />
                          <Typography>
                            {event.currentParticipants}/{event.maxParticipants} riders
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        flex: 1,
                        minHeight: 80, // Ensure consistent height for description
                      }}
                    >
                      {event.description}
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {event.inclusions.map((inclusion) => (
                          <Chip
                            key={inclusion}
                            label={inclusion}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(212, 32, 44, 0.1)',
                              color: 'primary.main',
                              borderRadius: '4px',
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        onClick={() => handleOpenRegistration(event)}
                        fullWidth
                        sx={{
                          py: 1.5,
                          background: THEME.gradients.button,
                          '&:hover': {
                            background: THEME.gradients.buttonHover,
                          },
                        }}
                      >
                        {siteData.events.upcoming.registerButton}
                      </Button>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </MotionBox>
        </Container>

        <Dialog open={registrationOpen} onClose={handleCloseRegistration} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ bgcolor: 'background.paper', color: 'white' }}>
            Register for {selectedEvent?.title}
          </DialogTitle>
          <DialogContent sx={{ bgcolor: 'background.paper', color: 'text.secondary', pt: 2 }}>
            {/* Registration form content */}
            <Typography variant="body1" paragraph>
              Please note the following guidelines:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {selectedEvent?.guidelines.map((guideline) => (
                <Typography component="li" key={guideline} sx={{ mb: 1 }}>
                  {guideline}
                </Typography>
              ))}
            </Box>
          </DialogContent>
          <DialogActions sx={{ bgcolor: 'background.paper', p: 3 }}>
            <Button onClick={handleCloseRegistration} sx={{ color: 'text.secondary' }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
              }}
            >
              Confirm Registration
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
