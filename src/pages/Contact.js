import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import contactData from '../data/contact.json';
import siteData from '../data/site.json';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'WhatsAppIcon':
      return <WhatsAppIcon fontSize="large" />;
    case 'FacebookIcon':
      return <FacebookIcon fontSize="large" />;
    case 'InstagramIcon':
      return <InstagramIcon fontSize="large" />;
    case 'EmailIcon':
      return <EmailIcon fontSize="large" />;
    case 'LocationOnIcon':
      return <LocationOnIcon fontSize="large" />;
    default:
      return null;
  }
};

export default function Contact() {
  const { social: contactInfo } = contactData;
  const { contact: content } = siteData;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Get in Touch Section */}
        <Box sx={{ mb: 6 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: { xs: 4, sm: 6 }, textAlign: 'center' }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              {content.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              {content.subtitle}
            </Typography>
          </MotionBox>

          {/* Social Media Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {contactInfo.map((info, index) => {
              return (
                <MotionCard
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={(theme) => ({
                    width: '100%',
                    background:
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    p: { xs: 3, sm: 4 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background:
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, rgba(26,26,26,0.95) 0%, rgba(20,20,20,0.9) 100%)'
                          : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%)',
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      color: info.color,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.05)',
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    {getIconComponent(info.icon)}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}
                    >
                      {info.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {info.description}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    href={info.link}
                    target="_blank"
                    sx={{
                      bgcolor: info.color,
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: info.color,
                        opacity: 0.9,
                      },
                    }}
                  >
                    {info.action}
                  </Button>
                </MotionCard>
              );
            })}
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box sx={{ mb: 6, width: '100%' }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{ width: '100%' }}
          >
            <MotionCard
              sx={(theme) => ({
                background:
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                p: { xs: 3, sm: 4 },
                borderRadius: 2,
              })}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'text.primary',
                  textAlign: 'center',
                  mb: 4,
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {content.form.title}
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label={content.form.fields.name.label}
                  variant="outlined"
                  required={content.form.fields.name.required}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      height: '56px',
                      color: theme.palette.text.primary,
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.05)',
                      '& fieldset': {
                        borderColor:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.2)'
                            : 'rgba(0,0,0,0.2)',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '1px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      },
                    },
                  })}
                />
                <TextField
                  fullWidth
                  label={content.form.fields.email.label}
                  variant="outlined"
                  type={content.form.fields.email.type}
                  required={content.form.fields.email.required}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      height: '56px',
                      color: theme.palette.text.primary,
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.05)',
                      '& fieldset': {
                        borderColor:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.2)'
                            : 'rgba(0,0,0,0.2)',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '1px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      },
                    },
                  })}
                />
                <TextField
                  fullWidth
                  label={content.form.fields.subject.label}
                  variant="outlined"
                  required={content.form.fields.subject.required}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      height: '56px',
                      color: theme.palette.text.primary,
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.05)',
                      '& fieldset': {
                        borderColor:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.2)'
                            : 'rgba(0,0,0,0.2)',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '1px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      },
                    },
                  })}
                />
                <TextField
                  fullWidth
                  label={content.form.fields.message.label}
                  multiline
                  rows={content.form.fields.message.rows}
                  variant="outlined"
                  required={content.form.fields.message.required}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      color: theme.palette.text.primary,
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.05)',
                      '& fieldset': {
                        borderColor:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.2)'
                            : 'rgba(0,0,0,0.2)',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '1px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      },
                    },
                  })}
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: '100%',
                    height: '56px',
                    background: 'linear-gradient(45deg, #D4202C 30%, #FF4B57 90%)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF4B57 30%, #D4202C 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(212, 32, 44, 0.4)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {content.form.fields.submit.text}
                </Button>
              </Box>
            </MotionCard>
          </MotionBox>
        </Box>

        {/* Location Section */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          sx={(theme) => ({
            width: '100%',
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
                : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            overflow: 'hidden',
          })}
        >
          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: 'primary.main',
                textAlign: 'center',
                mb: 3,
              }}
            >
              {content.location.title}
            </Typography>
            <Box
              component="iframe"
              title={content.location.mapTitle}
              src={content.location.mapUrl}
              sx={{
                width: '100%',
                height: '450px',
                border: 0,
                borderRadius: '8px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocationOnIcon sx={{ mr: 1 }} />
                {content.location.address}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmailIcon sx={{ mr: 1 }} />
                {content.location.email}
              </Typography>
            </Box>
          </Box>
        </MotionCard>
      </Container>
    </Box>
  );
}
