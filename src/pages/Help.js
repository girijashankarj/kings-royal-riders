import BuildIcon from '@mui/icons-material/Build';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MapIcon from '@mui/icons-material/Map';
import WifiIcon from '@mui/icons-material/Wifi';
import {
  Alert,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import Lottie from 'lottie-react';
import React from 'react';
import helpAnimation from '../assets/animations/help-support.json';
import { getCommonStyles } from '../common/styles/commonStyles';
import helpData from '../data/help.json';
import siteData from '../data/site.json';

// Icon mapping
const IconMap = {
  BuildIcon: BuildIcon,
  HealthAndSafetyIcon: HealthAndSafetyIcon,
  MapIcon: MapIcon,
  WifiIcon: WifiIcon,
};

export default function Help() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);

  const { emergencyContacts, ridingTips } = helpData;

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              mb: { xs: 4, sm: 6 },
            }}
          >
            <Box sx={{ width: { xs: 150, sm: 200 }, mb: { xs: 3, sm: 0 } }}>
              <Lottie animationData={helpAnimation} />
            </Box>
            <Box sx={{ ml: { xs: 0, sm: 3 }, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h3" sx={{ color: 'text.primary' }}>
                Help & Support
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
                {siteData.help.subtitle}
              </Typography>
            </Box>
          </Box>

          <Alert
            severity="info"
            sx={{
              mb: { xs: 3, sm: 4 },
              backgroundColor: 'rgba(26,35,126,0.1)',
              border: '1px solid rgba(26,35,126,0.2)',
            }}
          >
            {siteData.help.alert}
          </Alert>

          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
              {siteData.help.sections.emergency.title}
            </Typography>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {emergencyContacts.map((contact) => (
                <Grid item xs={12} sm={6} key={contact.name}>
                  <Card sx={styles.card}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                        {contact.name}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {contact.number}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
              {siteData.help.sections.tips.title}
            </Typography>
            <Grid container spacing={3} sx={{ m: 0, width: '100%' }}>
              {ridingTips.map((section) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={section.title}
                  sx={{
                    display: 'flex',
                    p: 1.5,
                  }}
                >
                  <Card
                    sx={{
                      ...styles.card,
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 1 }}>
                        <Box sx={{ color: 'primary.main' }}>
                          {IconMap[section.icon] &&
                            React.createElement(IconMap[section.icon], { sx: { fontSize: 28 } })}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 2,
                            color: 'text.primary',
                            fontWeight: 500,
                          }}
                        >
                          {section.title}
                        </Typography>
                      </Box>

                      <List sx={{ py: 0 }}>
                        {section.items.map((item, index) => (
                          <ListItem key={index} sx={{ px: 1, py: 0.5 }}>
                            <ListItemText
                              primary={item}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  color: 'text.secondary',
                                  fontSize: '0.9rem',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Developer Credit Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Divider sx={{ mb: 4 }} />
            <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
              Developer Credits
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
              Developed by {siteData.app.developer}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.8 }}>
              Version {siteData.app.version}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ color: 'text.secondary', mt: 2, opacity: 0.7 }}
            >
              {siteData.app.copyright}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
