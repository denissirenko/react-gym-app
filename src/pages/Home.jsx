import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import { Exercises } from '../components/Exercises';
import { SearchExercises } from '../components/SearchExercises';
import { HeroBanner } from '../components/HeroBanner';

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};
