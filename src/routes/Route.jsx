import React from 'react';
import { BrowserRouter, Routes, Route as ReactRoute } from 'react-router-dom';
import Landing from '../pages/Landing';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-3xl font-bold mb-2">404</h1>
    <p className="text-lg text-gray-500">Page Not Found</p>
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <ReactRoute path="/" element={<Landing />} />
        {/* Add more routes here as your app grows */}
        <ReactRoute path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;