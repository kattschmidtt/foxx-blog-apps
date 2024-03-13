import { Container, Grid } from '@mui/material';
import React from 'react';
import Navbar from '../Navbar/Navbar';

import entry from '../../entry.json';
import EntryCard from '../EntryCard/EntryCard';
import AboutMeCard from '../AboutMe/AboutMeCard';
import MapboxComponent from '../Apps/MapboxApp/MapboxApp';

const SiteContainer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <EntryCard entryList={entry} />
        </Grid>
        <Grid item xs={4}>
          <AboutMeCard />
        </Grid>
      </Grid>
      <MapboxComponent />
    </Container>
  )
};

export default SiteContainer;