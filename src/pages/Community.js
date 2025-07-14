import { Avatar, Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { PAGE_TITLES } from '../common/config/constants';
import { getCommonStyles } from '../common/styles/commonStyles';
import membersData from '../data/members.json';
import siteData from '../data/site.json';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const CARD_HEIGHT = 400; // Fixed height for all cards

export default function Community() {
  const theme = useTheme();
  const styles = {
    ...getCommonStyles(theme),
    gridItem: {
      width: '100%',
      display: 'flex',
    },
    memberCard: {
      width: '100%',
      height: CARD_HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
      }`,
    },
    cardContent: {
      p: 3,
      textAlign: 'center',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    memberName: {
      color: 'text.primary',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    memberRole: {
      color: 'primary.main',
      mt: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    memberBio: {
      color: 'text.secondary',
      mt: 2,
      flex: 1,
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      textOverflow: 'ellipsis',
    },
    memberStats: {
      color: 'text.secondary',
      mt: 2,
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };

  const { kings_council: kingsCouncil, members } = membersData;

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
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ color: 'text.primary' }}>
              {PAGE_TITLES.COMMUNITY}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {siteData.community.subtitle}
            </Typography>
          </Box>

          {/* Kings Council Section */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', mb: 4 }}>
              {siteData.community.sections.council.title}
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              {kingsCouncil.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.id} sx={styles.gridItem}>
                  <MotionCard
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={styles.memberCard}
                  >
                    <Box sx={styles.cardContent}>
                      <Avatar
                        src={member.avatar}
                        alt={member.name}
                        sx={(theme) => ({
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: `4px solid ${theme.palette.primary.main}`,
                          boxShadow:
                            theme.palette.mode === 'dark'
                              ? '0 0 20px rgba(212,32,44,0.3)'
                              : '0 0 20px rgba(229,57,53,0.2)',
                        })}
                      />
                      <Typography variant="h6" sx={styles.memberName}>
                        {member.name}
                      </Typography>
                      <Typography variant="body1" sx={styles.memberRole}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={styles.memberBio}>
                        {member.bio}
                      </Typography>
                      <Typography variant="caption" sx={styles.memberStats}>
                        {member.rides} rides since {member.yearJoined}
                      </Typography>
                    </Box>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ ...styles.divider, my: 6 }} />

          {/* Regular Members Section */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', mb: 4 }}>
              {siteData.community.sections.members.title}
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              {members.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.id} sx={styles.gridItem}>
                  <MotionCard
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={styles.memberCard}
                  >
                    <Box sx={styles.cardContent}>
                      <Avatar
                        src={member.avatar}
                        alt={member.name}
                        sx={(theme) => ({
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: `4px solid ${theme.palette.primary.main}`,
                          boxShadow:
                            theme.palette.mode === 'dark'
                              ? '0 0 20px rgba(212,32,44,0.3)'
                              : '0 0 20px rgba(229,57,53,0.2)',
                        })}
                      />
                      <Typography variant="h6" sx={styles.memberName}>
                        {member.name}
                      </Typography>
                      <Typography variant="body1" sx={styles.memberRole}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={styles.memberBio}>
                        {member.bio}
                      </Typography>
                      <Typography variant="caption" sx={styles.memberStats}>
                        {member.rides} rides since {member.yearJoined}
                      </Typography>
                    </Box>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
