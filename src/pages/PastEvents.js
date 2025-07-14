import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { getCommonStyles } from '../common/styles/commonStyles';
import eventsData from '../data/events.json';
import siteData from '../data/site.json';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function PastEvents() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);

  const pastEvents = useMemo(
    () => eventsData.past.sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  return (
    <Box sx={styles.pageContainer}>
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
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {siteData.pastEvents.title}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
              {siteData.pastEvents.subtitle}
            </Typography>
          </Box>
        </MotionBox>

        <Grid container spacing={3}>
          {pastEvents.map((event, index) => (
            <Grid item xs={12} key={event.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                sx={styles.card}
              >
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      height: '240px',
                      objectFit: 'cover',
                    }}
                  />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    {event.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: 'auto',
                      pt: 2,
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.participants?.length || 0} Riders
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.distance}km Journey
                    </Typography>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
