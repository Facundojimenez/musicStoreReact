import { createTheme } from '@material-ui/core';
import {indigo} from '@material-ui/core/colors';

const Tema = createTheme({ 
    palette: { 
        primary: {
            light: indigo[400],
            main: indigo[700],
            dark: indigo[900]
        },
        background:{
            default: "#eee"
        }
    }
})

export default Tema;