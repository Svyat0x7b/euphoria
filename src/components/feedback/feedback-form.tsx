import React from 'react';

interface IFeedbaclFormProps {
    id: string;
}

const FeedbackForm: React.FC<IFeedbaclFormProps> = () => {
    return (
        <form
            className="self-center flex flex-col gap-[25px] w-[350px]"
            onSubmit={(e) => {
                e.preventDefault();
            }}>
            <label htmlFor="email" className="flex flex-col gap-[10px]">
                E-mail
                <input
                    type="email"
                    className="ml-[10px] border-[2px] border-[#2a2a2a] px-[10px] py-[5px] outline-none"
                />
            </label>
            <label htmlFor="username" className="flex flex-col gap-[10px]">
                Username
                <input
                    type="text"
                    className="ml-[10px] border-[2px] border-[#2a2a2a] px-[10px] py-[5px] outline-none"
                />
            </label>
            <label htmlFor="feedback" className="flex flex-col gap-[10px]">
                Feedback
                <textarea
                    className="w-[97%] ml-[10px] mr-[0px] border-[2px] border-[#2a2a2a] px-[10px] py-[5px] outline-none resize-none"
                    rows={5}></textarea>
            </label>
            <button
                type="submit"
                className="self-center px-[15px] py-[5px] border-none bg-[#8A33FD] text-[#fff] font-[600] w-[70%] hover:bg-[#974afd]">
                Submit
            </button>
        </form>
    );
};

export default FeedbackForm;
