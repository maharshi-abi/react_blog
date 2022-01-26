import * as React from 'react';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';
import Footer from './Footer';

export default function BlogIndex() {
  return (
    <React.Fragment>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

        {/* dashboard detail page */}
        <Box gridColumn="span 12">
          <Dashboard />
        </Box>
        {/* dashboard detail page */}


        {/* Footer detail page */}
        <Box gridColumn="span 12">
          <Footer />
        </Box>
        {/* Footer detail page */}
      </Box>

    </React.Fragment>
  );
}