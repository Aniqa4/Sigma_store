import React from 'react'
import FeatureCard from '../../../components/FeatureCard'
import { MdOutlineLocalShipping } from "react-icons/md";

function Features() {
  return (
    <div className=' bg-white flex justify-between gap-5 p-5 my-10'>
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