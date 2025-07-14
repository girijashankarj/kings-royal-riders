import { Box, Card, CardMedia, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { getCommonStyles } from '../common/styles/commonStyles';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Gallery() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);

  const images = [
    {
      title: 'Lavasa Ride',
      url: '/kings-royal-riders/images/rides/lavasa.jpg',
      date: 'March 2025',
    },
    {
      title: 'Lonavala Trip',
      url: '/kings-royal-riders/images/rides/lonavala.jpg',
      date: 'April 2025',
    },
    {
      title: 'Mulshi Adventure',
      url: '/kings-royal-riders/images/rides/mulshi.jpg',
      date: 'May 2025',
    },
    {
      title: 'Group Photo',
      url: '/kings-royal-riders/images/group-photo.jpg',
      date: 'May 2025',
    },
  ];

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
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ color: 'text.primary' }}>
            Photo Gallery
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Capturing memories from our epic rides and events
          </Typography>
        </Box>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          component={Grid}
          container
          spacing={3}
        >
          {images.map((image, index) => (
            <>
              <Grid item xs={12} sm={6} md={4} key={index} sx={styles.gridItem}>
                <MotionCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={styles.card}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={image.url}
                    alt={image.title}
                    sx={{
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={styles.cardContent} p={2}>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {image.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                      {image.date}
                    </Typography>
                  </Box>
                </MotionCard>
              </Grid>
              {(index + 1) % 3 === 0 && index !== images.length - 1 && (
                <Grid item xs={12}>
                  <Box sx={styles.divider} />
                </Grid>
              )}
            </>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
