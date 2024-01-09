import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Women from './components/pages/women';

import './App.css';
import MainLayout from './components/layout/main-layout';
import Cart from './components/pages/cart';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
            <Route
                path="/women"
                element={
                    <MainLayout>
                        <Women />
                    </MainLayout>
                }
            />
            <Route
                path="/cart"
                element={
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default App;
