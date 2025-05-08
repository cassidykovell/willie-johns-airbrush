import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <div id="navbar">
      <Header />
      <Nav />
      </div>
      <main id="content">
        <section>
        <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;