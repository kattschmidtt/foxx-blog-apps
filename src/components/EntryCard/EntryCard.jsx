import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import Tags from '../Tags/Tags';

const EntryCard = ({entryList}) => {
  return (
    <>
      {entryList.map(entry => (
        <Card sx={{ 
          mt: '10px', 
          mb: '10px', 
          fontFamily: 'Roboto Mono',
          background: '#CFB3CD'
        }}>
          <Typography variant='h5' sx={{fontFamily: 'Roboto Mono', margin:'8px'}}>
            {entry.title.toUpperCase()}
          </Typography>
          <CardContent sx={{margin: '8px'}}>
            {entry.entryText}
          </CardContent>
          <Tags entryList={entry} />
        </Card>
      ))}
    </>
  )
};

export default EntryCard;