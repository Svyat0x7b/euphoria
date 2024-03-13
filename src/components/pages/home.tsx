import { Hero, Discounts, Arrivals, FeaturedProducts } from '../home/index';

const Home = () => {
    return (
        <main className="pb-[100px]">
            <Hero />
            <Discounts />
            <Arrivals />
            <FeaturedProducts />
        </main>
    );
};

export default Home;
