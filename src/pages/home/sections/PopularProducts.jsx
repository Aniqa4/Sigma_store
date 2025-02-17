import React from 'react'
import ProductCard from '../../../components/ProductCard'
import SectionTitle from '../../../components/SectionTitle';

function PopularProducts() {
    return (
        <div className='my-5'>
            <SectionTitle title={"Popular Products"} />
            <div className='md:grid grid-cols-4 gap-5 py-5 flex overflow-x-auto flex-nowrap'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default PopularProducts