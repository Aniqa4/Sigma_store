import React from 'react'
import ProductCard from '../../../components/ProductCard'
import SectionTitle from '../../../components/SectionTitle';

function FeaturedProducts() {
    return (
        <div className='my-5'>
            <SectionTitle title={"Featured Products"} />
            <div className='grid md:grid-cols-4 gap-5 py-5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default FeaturedProducts