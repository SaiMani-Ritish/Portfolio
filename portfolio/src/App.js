import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  CssBaseline,
  Paper,
  Fade,
  Grow,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#00bcd4' },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
    },
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="default" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Sai Mani Ritish
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Box>
          <IconButton onClick={toggleDarkMode} color="inherit" sx={{ ml: 2 }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Fade in timeout={800}>
          <Paper id="home" elevation={3} sx={{ p: 5, mb: 6, borderRadius: 4, textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>Welcome</Typography>
            <Typography variant="h5" color="text.secondary">
              I am a Full-Stack Developer with a focus on AI/ML and Cloud technologies.
            </Typography>
          </Paper>
        </Fade>

        <Fade in timeout={1000}>
          <Paper id="about" elevation={3} sx={{ p: 5, mb: 6, borderRadius: 4 }}>
            <Typography variant="h3" gutterBottom>About Me</Typography>
            <Typography variant="body1" color="text.secondary">
              I'm currently pursuing an M.S. in Computer Science with strong interests in building intelligent, scalable applications.
            </Typography>
          </Paper>
        </Fade>

        <Fade in timeout={1200}>
          <Paper id="skills" elevation={3} sx={{ p: 5, mb: 6, borderRadius: 4 }}>
            <Typography variant="h3" gutterBottom>Skills</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600}>Languages</Typography>
                <Typography variant="body2">Python, C++, SQL, JavaScript</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600}>Frameworks</Typography>
                <Typography variant="body2">React, Node.js, Express</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600}>Tools</Typography>
                <Typography variant="body2">Docker, AWS, Git</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        <Fade in timeout={1400}>
          <Box id="projects" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom>Projects</Typography>
            <Grid container spacing={4}>
              <Grow in timeout={1600}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card elevation={4} sx={{ borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image="/images/schedulearn.png"
                      alt="ScheduLearn"
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>ScheduLearn</Typography>
                      <Typography variant="body2" color="text.secondary">
                        AI-powered scheduling assistant.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="#" variant="outlined">View Project</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grow>
              <Grow in timeout={1800}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card elevation={4} sx={{ borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image="/images/finance.png"
                      alt="Finance App"
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>Personal Finance App</Typography>
                      <Typography variant="body2" color="text.secondary">
                        MERN stack with AI financial insights.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="#" variant="outlined">View Project</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grow>
              <Grow in timeout={2000}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card elevation={4} sx={{ borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image="/images/bloodbank.png"
                      alt="Blood Bank"
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>Online Blood Bank System</Typography>
                      <Typography variant="body2" color="text.secondary">
                        AWS-based scalable system.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="#" variant="outlined">View Project</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grow>
            </Grid>
          </Box>
        </Fade>

        <Fade in timeout={2200}>
          <Paper id="contact" elevation={3} sx={{ p: 5, mb: 6, borderRadius: 4 }}>
            <Typography variant="h3" gutterBottom>Contact</Typography>
            <Box
              component="form"
              className="contact-form"
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
            >
              <TextField label="Your Name" variant="outlined" required />
              <TextField label="Your Email" type="email" variant="outlined" required />
              <TextField label="Your Message" multiline rows={4} variant="outlined" required />
              <Button type="submit" variant="contained" color="primary" size="large">
                Send Message
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Sai Mani Ritish. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;