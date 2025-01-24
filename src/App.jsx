import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ListViewPage from './components/ListViewPage';
import DetailViewPage from './components/DetailViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/listview" element={<ListViewPage />} />
      <Route path="/detailview/:id" element={<DetailViewPage />} />
      </Routes>
  );
}

export default App;
