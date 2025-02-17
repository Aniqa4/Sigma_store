import React from 'react'
import FeatureCard from '../../../components/FeatureCard'
import { MdOutlineLocalShipping } from "react-icons/md";

function Features() {
  return (
    <div className=' bg-white grid gap-5 p-5 lg:flex justify-between md:gap-10 md:p-10 my-10'>
      <FeatureCard
        icon={<MdOutlineLocalShipping />}
        title={'Free Shipping'}
        description={'Free UK shipping when you spend £30.'} />
      <FeatureCard
        icon={<MdOutlineLocalShipping />}
        title={'Get Fresh Products'}
        description={'Find a range of best online organic food'} />
      <FeatureCard
        icon={<MdOutlineLocalShipping />}
        title={'Free Shipping'}
        description={'Free UK shipping when you spend £30.'} />
      <FeatureCard
        icon={<MdOutlineLocalShipping />}
        title={'Free Shipping'}
        description={'Free UK shipping when you spend £30.'} />
    </div>
  )
}

export default Features