import * as React from 'react';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';
import Footer from './Footer';
import ComponentRoot from './Components/index';

export default function BlogIndex() {
  return (
    <React.Fragment>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

        {/* dashboard detail page */}
        <Box gridColumn="span 12">
          <Dashboard />
        </Box>
        {/* dashboard detail page */}

        {/* include main component section */}
        <Box gridColumn="span 10">
          <ComponentRoot />
        </Box>
        {/* include main component section */}

        {/* Footer detail page */}
        <Box gridColumn="span 12" style={{ backgroundColor: "#ffa3fc",padding:20 }}>
          <Footer />
        </Box>
        {/* Footer detail page */}
      </Box>

    </React.Fragment>
  );
}