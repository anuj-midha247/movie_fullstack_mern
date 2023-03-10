import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar,TextField, Autocomplete, Tabs, Tab } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Box } from '@mui/system';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    }, []);

  return (
      <AppBar position='sticky' sx={{bgcolor:"#2b2d42"}}>
          <Toolbar>
              <Box width={'20%'}>
                  <MovieIcon/>
              </Box>
              <Box width={'30%'} margin={"auto"}>
              <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => <TextField sx={{input:{color:"white"}}} variant='standard' {...params} placeholder="Search For Movies" />}
      />
              </Box>
              <Box display={'flex'}>
                  <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)} indicatorColor="secondary">
                  <Tab LinkComponent={Link} to="/movies" label="Movies"/>
                      <Tab LinkComponent={Link} to="/admin" label="Admin" />
                      <Tab LinkComponent={Link} to="/auth" label="Auth"/>
                  </Tabs>
              </Box>
          </Toolbar>
    </AppBar>
  )
}

export default Header