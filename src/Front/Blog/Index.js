import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from './Slider/Slider';
import BlogGrid from './List/Index';

export default function BlogIndex() {
  return (
    <React.Fragment>

      <Slider />
      {/* Blog detail page */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        <Box gridColumn="span 3">
          <BlogGrid />
        </Box>
        
      </Box>
      {/* Blog detail page */}
    </React.Fragment>
  );
}