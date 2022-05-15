import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import ElevateAppBar from './components/ElevatedAppBar';

function goToGitHubRepo(){
  const githubURL = 'https://github.com/codeNitesh/code-basket/';
  window.location.replace(githubURL)
}

export default function App() {
  return (
    <>
    <ElevateAppBar title='CodeBasket' buttonTxt='GitHub Repo' goToGitHubRepo={goToGitHubRepo}/>
    <Container>
      <Outlet />
    </Container>
    </>
  );
}
