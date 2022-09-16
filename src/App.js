import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Image from  './dine-restaurant-images/images/homepage/hero-bg-mobile@2x.jpg';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#9e7f66',
    },
  },
  typography:{
    fontFamily:'League Spartan'
  }
});


function App() {
  return (    
    <ThemeProvider theme={theme}> 
  
    <Container maxWidth='sm'> 
    <img src={Image}/>
    </Container>
    </ThemeProvider>
  
  )
}

export default App;
