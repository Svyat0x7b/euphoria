import { useEffect, useState } from 'react';
import React from 'react';
import FeedbackForm from './feedback-form';
import FeedbackList from './feedback-list';
import axios from 'axios';
import { API_DOMAIN } from '../../constants';

interface IFeedbackSectionProps {
    id: string;
}

const FeedbackSection: React.FC<IFeedbackSectionProps> = ({ id }) => {
    const [fetchedFeedbacks, setFetchedFeedbacks] = useState(null);
    useEffect(() => {
        const fetchFeedbackById = async (id: string) => {
            const res = await axios.get(`${API_DOMAIN}/api/v1/products/${id}/feedbacks`);
            setFetchedFeedbacks(res.data);
        };
    }, []);
    return (
        <div className="py-[20px] px-[80px] flex flex-col">
            <h1 className="self-center text-[35px] font-[600]">Feedbacks</h1>
            <FeedbackForm id={id} />
            <FeedbackList items={fetchedFeedbacks} />
        </div>
    );
};

export default FeedbackSection;
