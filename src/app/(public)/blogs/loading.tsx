import Loading from '@/components/ui/Loading';
import React from 'react';

const loading = () => {
    return (
        <div className='py-24 flex flex-col items-center justify-center '>
            <Loading></Loading>
        </div>
    );
};

export default loading;