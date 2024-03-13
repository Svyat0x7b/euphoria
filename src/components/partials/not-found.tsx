import { useNavigate } from 'react-router-dom';

interface INotFoundProps {
    message: string | undefined;
}

const NotFound: React.FC<INotFoundProps> = ({ message }) => {
    const navigate = useNavigate();
    return (
        <section className="h-[70vh] flex flex-col justify-center items-center gap-[30px]">
            <h1 className="text-[25px] font-[500]">Not Found</h1>
            <p className="text-[50px] font-[700]">404</p>
            {message && <p className="font-[500]">{message}</p>}
            <button
                onClick={() => navigate('/')}
                className="bg-[#8A33FD] py-[5px] px-[15px] rounded-[8px] text-[#fff] font-[600] hover:bg-[#a76bf6]">
                Return to Home Page
            </button>
        </section>
    );
};

export default NotFound;
