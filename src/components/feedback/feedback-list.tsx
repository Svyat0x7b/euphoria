import React from 'react';
import FeedbackItem from './feedback-item';

interface IFeedbackListProps {
    items: any;
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ items }) => {
    return (
        <ul className="grid grid-cols-2 mt-[50px] gap-y-6">
            <FeedbackItem />
        </ul>
    );
};

export default FeedbackList;
