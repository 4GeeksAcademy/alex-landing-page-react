import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// index.css'
import '../styles/index.css';

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <main className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Jumbotron />
          <CardsSection />
      </div>
      <Footer />
    </main>
  </React.StrictMode>
);