import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { THEME } from '../common/config/constants';
import { getCommonStyles } from '../common/styles/commonStyles';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Blog() {
  const theme = useTheme();
  const styles = {
    ...getCommonStyles(theme),
    blogCard: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    },
    category: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 1,
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Essential Motorcycle Safety Tips',
      excerpt:
        'Learn about the most important safety practices every rider should know, from proper gear selection to advanced riding techniques.',
      category: 'Safety',
      author: {
        name: 'John Rider',
        avatar: '/images/members/avatar-1.jpg',
      },
      image: '/images/rides/lavasa.jpg',
      date: 'May 15, 2024',
    },
    {
      id: 2,
      title: 'Best Riding Routes in Maharashtra',
      excerpt:
        'Discover the most scenic and thrilling motorcycle routes in Maharashtra, from coastal highways to mountain passes.',
      category: 'Routes',
      author: {
        name: 'Mike Explorer',
        avatar: '/images/members/avatar-2.jpg',
      },
      image: '/images/group-photo.jpg',
      date: 'May 12, 2024',
    },
    {
      id: 3,
      title: 'Motorcycle Maintenance 101',
      excerpt:
        'Essential tips for keeping your motorcycle in top condition. Learn basic maintenance routines every rider should know.',
      category: 'Maintenance',
      author: {
        name: 'Sarah Tech',
        avatar: '/images/members/avatar-3.jpg',
      },
      image: '/images/rides/mulshi.jpg',
      date: 'May 10, 2024',
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
            Riders' Blog
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
            Stories, tips, and adventures from our riding community
          </Typography>
        </MotionBox>

        <MotionBox
          component={Grid}
          container
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <MotionCard variants={itemVariants} sx={styles.blogCard}>
                <Box sx={{ position: 'relative' }}>
                  <Chip label={post.category} sx={styles.category} color="primary" />
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        height: '240px',
                        objectFit: 'cover',
                      }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar src={post.author.avatar} sx={{ width: 32, height: 32 }} />
                    <Box sx={{ ml: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
