import * as React from 'react';
import {Box,Button, Typography} from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { Note } from './customComponents/Note';
import { Navbar } from './customComponents/Navbar';

export const Label = () => {
    return <>
    <div className="wrapper">
    <aside>
      <Box mb={4} sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper'}}>
        <Navbar/>
      </Box>
      <Button variant="contained">Create New Note</Button>
    </aside>
        <main>
             <div className="main-wrapper">
                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Notes"
                            inputProps={{ 'aria-label': 'search notes' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <div className="notes-wrapper">
                        <div className="notes-header">
                        <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                            LABEL 1
                        </Typography>
                        <IconButton aria-label="edit note" sx={{marginLeft: 'auto'}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                        </div>
                        <Note/>
                    </div>
                    <div className="notes-wrapper">
                        <div className="notes-header">
                        <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                            LABEL 2
                        </Typography>
                        <IconButton aria-label="edit note" sx={{marginLeft: 'auto'}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                        </div>
                        <Note/>
                        <Note/>
                    </div>
            </div>
        </main>
    </div>
    </>
}