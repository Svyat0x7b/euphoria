import React from 'react';
import Header from '../partials/header';
import Hero from '../home/hero';
import Discounts from '../home/discounts';
import Arrivals from '../home/arrivals';
import Footer from '../partials/footer';

const Home = () => {
    return (
        <main className="mb-auto">
            <Hero />
            <Discounts />
            <Arrivals />
        </main>
    );
};

export default Home;
