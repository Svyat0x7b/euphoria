import { userIcon } from '../../assets/product';

const FeedbackItem = () => {
    return (
        <li className="flex gap-[25px] w-full ">
            <div className="w-[40px] h-[40px] p-[5px] border-[2px] border-[#2a2a2a] rounded-full overflow-hidden">
                <img src={userIcon} alt="user" />
            </div>
            <div className="flex flex-col bg-slate-400 rounded-[8px] p-[20px] w-[400px]">
                <h2 className="font-[700]">Username</h2>
                <p className="break-words">
                    Cupidatat nulla id officia cupidatat aliquip reprehenderit deserunt
                    exercitation. Labore mollit aliqua deserunt quis dolor sit elit reprehenderit
                    duis. Nulla consectetur anim cillum ut irure ex aute. Mollit mollit magna ad
                    eiusmod commodo officia non. Ad deserunt consequat non nulla fugiat tempor.
                </p>
                <p className="self-end font-[700]">12:15</p>
            </div>
        </li>
    );
};

export default FeedbackItem;
