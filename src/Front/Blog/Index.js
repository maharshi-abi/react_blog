import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from './Slider/Slider';
import BlogGrid from './List/Index';

export default function BlogIndex() {
  return (
    <React.Fragment>
      {/* slider section */}
      <Slider />
      {/* slider section */}

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {/* Blog detail page */}
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        {/* Blog detail page */}
      </Box>      
      
    </React.Fragment>
  );
}