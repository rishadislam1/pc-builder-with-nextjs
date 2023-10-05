import { useRouter } from 'next/router';
import React from 'react';

const productDetails = () => {
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            product id: {id}
        </div>
    );
};

export default productDetails;