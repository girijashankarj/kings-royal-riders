import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { THEME } from '../common/config/constants';
import { getCommonStyles } from '../common/styles/commonStyles';
import siteData from '../data/site.json';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function About() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);

  const cardStyle = {
    background: theme.palette.mode === 'dark' ? THEME.gradients.card : THEME.gradients.cardLight,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 2,
    boxShadow:
      theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
  };

  const kingsCouncil = [
    'Gautam Prasad',
    'Gautam Kaul',
    'Anant Bhukelepatil',
    'Devendra Phalke',
    'Amit Mallick',
  ];

  const kingsmen = [
    'Subi Babu',
    'Prashant Dawange',
    'Sourya Gupta',
    'Pritish Palekar',
    'Shreyas Rai',
    'Ashish Jadhav',
    'Sumeet Rathod',
    'Sohail Patel',
    'Satya Prakash Roul',
    'Rahul Dixit',
    'Abhishek Purohit',
    'Ravi Dogra',
    'Amit Deshpande',
  ];

  const stats = [
    {
      icon: <DirectionsBikeIcon sx={{ fontSize: 40 }} />,
      value: siteData.stats.kilometers,
      label: 'Kilometers Ridden',
      color: '#1A237E', // Secondary color
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      value: siteData.stats.members,
      label: 'Active Members',
      color: '#D4202C', // Primary color
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      value: siteData.stats.events,
      label: 'Events Organized',
      color: '#2e7d32',
    },
  ];

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: 6 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: THEME.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About {siteData.app.name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
              King's Royal Riders Motorcycle Club has moved way beyond the concept of just riding
              for leisure and exploring new lands. The club has grown multifold and has taken upon
              itself the responsibility of promoting a safe riding culture, enhancing the riding
              community, providing a platform for all those who wish to bring out their urge to ride
              and reach out to untouched parts of this beautiful country.
            </Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': {
                  background: THEME.gradients.button,
                },
              }}
            />
          </MotionBox>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <MotionCard
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                sx={{
                  height: '100%',
                  ...cardStyle,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: 'primary.main', fontWeight: 600 }}
                  >
                    {siteData.community.sections.council.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    {siteData.about.kingsCouncil.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {kingsCouncil.map((name) => (
                      <Typography
                        key={name}
                        variant="body2"
                        sx={(theme) => ({
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          bgcolor:
                            theme.palette.mode === 'dark'
                              ? 'rgba(212, 32, 44, 0.1)'
                              : 'rgba(212, 32, 44, 0.15)',
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          backdropFilter: 'blur(10px)',
                          textShadow:
                            theme.palette.mode === 'dark' ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                        })}
                      >
                        {name}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionCard
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                sx={{
                  height: '100%',
                  ...cardStyle,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: 'primary.main', fontWeight: 600 }}
                  >
                    KINGSMEN
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Blokes who take everyone for a ride (literally). This is the team which is
                    responsible for organizing & scheduling rides. Our content creators help to
                    promote the Riders and The Club on social media platforms. The logistics
                    required are also managed by this group.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {kingsmen.map((name) => (
                      <Typography
                        key={name}
                        variant="body2"
                        sx={(theme) => ({
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          bgcolor:
                            theme.palette.mode === 'dark'
                              ? 'rgba(212, 32, 44, 0.1)'
                              : 'rgba(212, 32, 44, 0.15)',
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          backdropFilter: 'blur(10px)',
                          textShadow:
                            theme.palette.mode === 'dark' ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                        })}
                      >
                        {name}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
              {siteData.about.csr.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
              {siteData.about.csr.content}
            </Typography>
          </Box>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              width: '100%',
              ...cardStyle,
              p: 6,
              textAlign: 'center',
            }}
          >
            <Grid container spacing={6}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={4} key={stat.label}>
                  <MotionBox
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 2,
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? `linear-gradient(145deg, ${stat.color}22 0%, ${stat.color}11 100%)`
                          : `linear-gradient(145deg, ${stat.color}33 0%, ${stat.color}22 100%)`,
                      border: `1px solid ${stat.color}33`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Box
                      sx={{
                        color: stat.color,
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{
                        color: (theme) => (theme.palette.mode === 'dark' ? stat.color : stat.color),
                        fontWeight: 'bold',
                        mb: 1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: (theme) =>
                          theme.palette.mode === 'dark' ? 'text.secondary' : 'text.primary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
