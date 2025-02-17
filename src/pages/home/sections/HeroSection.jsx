import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Slider from './Slider';

const categories = [
    {
        id: 1,
        name: "Vegetables And Fruits",
        subcategories: [
            { id: 101, name: "Tomato" },
            { id: 102, name: "Banana" },
            { id: 103, name: "Carrot" }
        ]
    },
    {
        id: 2,
        name: "Dairy Products",
        subcategories: [
            { id: 201, name: "Milk" },
            { id: 202, name: "Cheese" },
            { id: 203, name: "Butter" }
        ]
    },
    {
        id: 3,
        name: "Beverages",
        subcategories: [
            { id: 301, name: "Tea" },
            { id: 302, name: "Coffee" },
            { id: 303, name: "Juices" }
        ]
    },
    { id: 4, name: "Bakery Items", subcategories: [] },
    { id: 5, name: "Frozen Foods", subcategories: [] },
    { id: 6, name: "Snacks", subcategories: [] },
    { id: 7, name: "Household Items", subcategories: [] }
];


function HeroSection() {
    const [open, setOpen] = useState(0)

    return (
        <div className=' pt-10 flex gap-7'>
            <div className=' hidden lg:block text-[16px] lg:w-[25%] z-10'>
                <h2 className=' bg-[#7BAE00] rounded-t px-5 py-2 text-white uppercase font-semibold'>All categories</h2>
                <div>
                    <div className='bg-white rounded-b h-[450px]'>
                        {
                            categories.map((category, index) =>
                                <div key={index}
                                    className=' relative'
                                    onMouseEnter={() => setOpen(category.id)}
                                    onMouseLeave={() => setOpen(0)}>
                                    <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500 flex items-center justify-between'
                                    >
                                        <a>{category.name}</a>{category?.subcategories.length > 0 && <MdArrowForwardIos />}
                                    </div>
                                    {
                                        open === category.id &&
                                        <div className=' absolute -right-[240px] top-0 bg-white shadow w-60'>
                                            <ul>
                                                {
                                                    category.subcategories.map(x => <li key={x.id} className='py-3 px-5 border-b'>{x.name}</li>)
                                                }
                                            </ul>
                                        </div>
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
            <Slider />
        </div>
    )
}

export default HeroSection