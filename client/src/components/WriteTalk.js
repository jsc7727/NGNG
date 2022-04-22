import { Card, Button, Box, Tooltip, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.50),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  display: 'flex'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    flex: 1,
  },
}));

const WriteTalk = (props) => {

  const handleOpen = () => {

  }

  return (
    <>
      {/* <Typography variant="body2" color="primary" fontSize={'28px'}>
        🔥 Hot 10 Tags Now!
      </Typography> */}
      <Card sx={{backgroundColor: '#606060', mb: 2, p: 2, display: 'flex', alignItems: 'center'}}>
        <CreateIcon sx={{mr: 2}} />
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder='Create a Post'
          label=''
          sx={{mr: 2}}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', height: 'inherit'}}>
          <Button variant='contained' color='success' onClick={handleOpen} sx={{height: '30px', mb: 1.5}}><AddPhotoAlternateIcon /></Button>
          <Button variant='contained' color='success' onClick={handleOpen} sx={{height: '30px', width: '60px'}}>Submit</Button>
        </Box>
      </Card>
    </>

  )
}

export default WriteTalk;