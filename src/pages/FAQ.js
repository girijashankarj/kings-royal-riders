import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PAGE_TITLES } from '../common/config/constants';
import { getCommonStyles } from '../common/styles/commonStyles';
import faqData from '../data/faqs.json';

const MotionBox = motion(Box);
const MotionAccordion = motion(Accordion);

export default function FAQ() {
  const theme = useTheme();
  const styles = getCommonStyles(theme);
  const { faqs } = faqData;

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom sx={{ color: 'text.primary', mb: 4 }}>
            {PAGE_TITLES.FAQ}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {faqs.map((faq, index) => (
              <Card key={index} sx={{ ...styles.card, width: '100%' }}>
                <MotionAccordion
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={(theme) => ({
                    background:
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(26,26,26,0.9) 0%, rgba(20,20,20,0.8) 100%)'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    width: '100%',
                    '&:before': {
                      display: 'none',
                    },
                  })}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        color: 'text.primary',
                      },
                    }}
                  >
                    <Typography variant="h6">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                  </AccordionDetails>
                </MotionAccordion>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
