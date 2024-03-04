import { 
  Card, 
  Divider, 
  Typography, 
  Link, 
  Tooltip } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import React from 'react';

const AboutMeCard = () => {
  return (
    <Card sx={{ 
      mt: '10px', 
      mb: '10px', 
      fontFamily: 'Roboto Mono',
      background: '#CFB3CD'
    }}>
      <Typography variant='h5' sx={{textAlign: 'center', fontFamily: 'Roboto Mono', margin:'8px'}}>
        <strong>About Me</strong>
        <Divider variant='middle' />
      </Typography>
      <Typography variant='body1' sx={{fontFamily: 'Roboto Mono', margin:'8px'}}>
        Hi, my name is Kat!<br/>
        I enjoy video games, programming, and music. I have a cat named Miso who is 3 1/2 years old.
        My favorite video game is World of Warcraft. 
        My favorite programming language is between Javascript or Typescript
        My favorite band at the moment is Palaye Royale.
      </Typography>

      <div className='about-me-icons'>
        <Tooltip 
          placement="top"
          title="Github">
          <Link href="https://github.com/kattschmidtt">
            <GitHubIcon sx={{margin: '8px'}}/>
          </Link>
        </Tooltip>

        <Tooltip 
          placement="top"
          title="LinkedIn">
          <Link href="https://www.linkedin.com/in/kattschmidt/">
            <LinkedInIcon sx={{margin: '8px'}}/>
          </Link>
        </Tooltip>

        <Tooltip 
          placement="top"
          title="Spotify Profile">
          <Link href="https://open.spotify.com/user/katschmidt">
            <LibraryMusicIcon sx={{margin: '8px'}}/>
          </Link>
        </Tooltip>
      </div>
    </Card>
  )
};

export default AboutMeCard;