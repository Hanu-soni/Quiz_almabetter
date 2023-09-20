import React from 'react';
import {AppBar,Typography,Toolbar, Button} from '@mui/material';
import { color } from '@mui/system';
import {useNavigate} from 'react-router-dom';

 
function Navbar()
{
    const navigate=useNavigate();
    return(
        <React.Fragment>
            <AppBar sx={{background:"white",color:"black"}}>
                <Toolbar>
                <Typography>AlmaBetter</Typography>
                <Button onClick={GotoHome}>
                    Home
                </Button>
                <Button  onClick={GotoQuiz}>
                    My-Quiz
                </Button>
                </Toolbar>
             
            </AppBar>
        </React.Fragment>

    )
    function GotoHome()
    {
        navigate('/quiz_comp')
    }
    function GotoQuiz()
    {
        navigate('/quiz')
    }
}
export default Navbar;