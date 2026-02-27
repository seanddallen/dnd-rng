import * as React from 'react';
import { ReactComponent as ReactLogo } from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function App() {
  const manaSymbols = ['w', 'u', 'r', 'g', 'b'];
  const [selectedMana, setSelectedMana] = React.useState('w');

  return (
    <div className={`App theme-${selectedMana}`}>
      <Box sx={{ flexGrow: 1, height: '10vh' }}>
        <AppBar position="static" style={{ backgroundColor: 'black'}}>
          <Toolbar>
            <Box sx={{ display: 'flex', gap: 0.6, mr: 2 }}>
              {manaSymbols.map((mana) => (
                <Box
                  key={mana}
                  title={`${mana.toUpperCase()} mana`}
                  aria-label={`${mana.toUpperCase()} mana`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedMana(mana)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setSelectedMana(mana);
                    }
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    opacity: selectedMana === mana ? 1 : 0.8,
                    transform: selectedMana === mana ? 'translateY(-1px)' : 'none',
                  }}
                >
                  <i
                    className={`ms ms-${mana} ms-cost ms-shadow`}
                    style={{
                      fontSize: '1.12rem',
                      filter: selectedMana === mana ? 'drop-shadow(0 0 4px rgba(255,255,255,0.55))' : 'none',
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Typography
              variant="h6"
              component="div"
              className="brand-title"
              sx={{
                flexGrow: 1,
                fontSize: '2rem',
                fontFamily: "'Cinzel Decorative', 'Copperplate', 'Papyrus', 'Garamond', fantasy, serif",
                fontWeight: 700,
              }}
            >
              DM LAB
            </Typography>
            <ReactLogo className="App-logo header-react-logo" aria-label="react-logo" style={{ height: '60px' }} />
          </Toolbar>
        </AppBar>
      </Box>
      <Menu />
      {/* <Button variant="contained" endIcon={<Science /> } style={{ backgroundColor: 'black' }}>
        Brew
      </Button> */}
    </div>
  );
}

export default App;
