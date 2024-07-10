import React, { useState, useContext } from 'react';
import { ThemeStore } from '../context/ThemeContext';
import ReviewComp from './ReviewComp';

const Reviews = ({ reviews }) => {
    const [showIdx, setShowIdx] = useState(null);
    const { theme } = useContext(ThemeStore);

    // Conditional styles based on the theme
    const containerClass = theme === 'dark' 
        ? 'w-full max-w-3xl mx-auto mt-24 p-6 bg-slate-800 text-white rounded-2xl shadow-lg'
        : 'w-full max-w-3xl mx-auto mt-24 p-6 bg-white text-black rounded-2xl shadow-lg';

    const titleClass = theme === 'dark'
        ? 'text-3xl font-bold text-orange-400 mb-6 text-center'
        : 'text-3xl font-bold text-orange-600 mb-6 text-center';

    return (
        <div className={containerClass}>
            <h3 className={titleClass}>
                Top Reviews
            </h3>
            <div className='space-y-4'>
                {reviews?.map((obj, idx) => (
                    <ReviewComp 
                        obj={obj} 
                        idx={idx} 
                        showIdx={showIdx} 
                        setShowIdx={setShowIdx} 
                        key={idx} 
                        theme={theme}  // Pass the theme prop to ReviewComp
                    />
                ))}
            </div>
        </div>
    );
}

export default Reviews;
