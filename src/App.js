import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <div className="app" data-test-id='app'>
      <div class="wrapper">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
    </div>
    
  );
}

export default App;
