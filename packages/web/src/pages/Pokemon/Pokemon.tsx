import React from 'react';
import { useGetUserByUserIdQuery } from '@fiji/common/src/store/services/users';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Pokemon = () => {
  const { data, isLoading } = useGetUserByUserIdQuery('ditto');
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack direction="row" spacing={2}>
          {!isLoading && data.results.map((item: any) => <Item>{item.name}</Item>)}
        </Stack>
      )}
    </>
  );
};

export default Pokemon;
