import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import GalleryPage from './GalleryPage';
import ImgPage from './ImgPage';
import { HelmetProvider } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components/macro';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import TestimonialsPage from './TestimonialsPage';
import ApplyPage from './ApplyPage';
import ContactPage from './ContactPage';
import LocationPage from './LocationPage';
import ModelsPage from './ModelsPage';
import ModelImgPage from './ModelImgPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="models/:id" element={<ModelImgPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/appointment" element={<ApplyPage />} />
          <Route path="gallery/:id" element={<ImgPage />} />
          <Route path="contact/:location" element={<LocationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export const GlobalStyles = createGlobalStyle`
    :root {
    --main-color: #a5c3cb;
    --second-color:#d7dede;
    --light-gray:#eaf1f1;
    --medium-gray:#c6c6c6;
    --dark-gray: #212121;
    --error-color: #fb0000;
    --success-color:  #15ac42;
    --primary-color: #007bff ;
    --black: #000;
    --gray: #7a7a7a;
    --white: #fff;
    --salmon: #FFE7CE;
    --cappuccino: #DBB995;
    --xxx: #FFF4E7;
    --transition: all 0.3s linear;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
`;

export default App;
