import React, {useState} from 'react';
import './App.css';
import {Nav} from "./components/Navbar"
import { Footer } from './components/Footer';
import { MantineProvider, ColorSchemeProvider, ColorScheme, useMantineColorScheme } from '@mantine/core';
import { useToggle, useLocalStorage, useHotkeys } from '@mantine/hooks';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<"dark"|"light">({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
 const [mode, toggleMode] = useToggle<"dark"|"light">(colorScheme,["dark","light"]); 
  const toggleNav = () =>{
    toggleMode();
    setColorScheme(mode);
  };
  useHotkeys([['c', () =>{
    toggleNav()
  }]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleMode}>
    <MantineProvider theme={{colorScheme}}>
      <Nav mode={colorScheme} toggleNav={toggleNav}/>
      <Footer/>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
