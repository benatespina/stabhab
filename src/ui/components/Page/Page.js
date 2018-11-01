import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Page.css';

export default ({children}) => (
  <div className="page">
    <main className="page__main">
      <Header />
      <section className="page__content">{children}</section>
      <Footer />
    </main>
  </div>
);
