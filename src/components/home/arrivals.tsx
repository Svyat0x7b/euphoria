import arrival1 from '../../assets/arrival-1.png';
import arrival2 from '../../assets/arrival-2.png';
import arrival3 from '../../assets/arrival-3.png';
import arrival4 from '../../assets/arrival-4.png';

type ArrivalType = {
    img: string;
    title: string;
};
const ARRIVALS: ArrivalType[] = [
    { img: arrival1, title: 'Knitted Joggers' },
    { img: arrival2, title: 'Full Sleeve' },
    { img: arrival3, title: 'Active T-Shirts' },
    { img: arrival4, title: 'Urban Shirts' },
];

const Arrivals = () => {
    return (
        <section className="pt-[100px] pl-[100px]">
            <div className="flex gap-10 items-center">
                <div className="w-[6px] h-[30px] bg-[#8A33FD]"></div>
                <h1 className="text-[34px] font-[600] text-[#3C4242]">New Arrival</h1>
            </div>
            <ul className="mt-[70px] flex gap-[40px]">
                {ARRIVALS.map((arrival: ArrivalType) => (
                    <li key={arrival.title}>
                        <img src={arrival.img} alt={arrival.title} />
                        <a
                            href="#"
                            className="block mt-[33px] ml-[5px] text-[20px] font-[700] text-[#3C4242]">
                            {arrival.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Arrivals;
