import { ARRIVALS, ArrivalType } from '../../constants';
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
                        <div className="w-[100%] h-[100%] object-contain">
                            <img
                                src={arrival.img}
                                alt={arrival.title}
                                className="w-[263px] h-[263px]"
                            />
                        </div>
                        <a
                            href="#"
                            className="block mt-[5px] ml-[5px] text-[20px] font-[700] text-[#3C4242]">
                            {arrival.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Arrivals;
