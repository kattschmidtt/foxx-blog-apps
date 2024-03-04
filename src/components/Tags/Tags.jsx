import { Chip } from '@mui/material';
import React from 'react';

const Tags = ({entryList}) => {

  const tagColors = {
    blog: 'primary',
    programming: 'secondary',
    react: 'success',
    data: 'error',
    maps: 'warning',
  };

  return (
    <>
      {entryList.tags.map(tag => (
          <Chip 
            sx={{mb:'8px', ml: '8px'}} 
            color={tagColors[tag] || 'default'}
            onClick={() => alert(`You clicked on ${tag}`)}
            key={tag} 
            label={tag} />
      ))}
    </>
  );
};

export default Tags;