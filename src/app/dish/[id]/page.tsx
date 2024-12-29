
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import CommentsSection from '@/components/CommentSection'

interface Props{
  params : {
    id:string
  }
}

interface Data{
  id: string,
  image: string,
  name: string,
  servings:string,
  caloriesPerServing:string,
  cookTimeMinutes:string,
  cuisine:string,
  difficulty:string,
  instructions:string[],
  tags:[],
  ingredients: []
}

const page = async ({params}: Props) => {
  const id = params.id
  const res = await axios.get(`https://dummyjson.com/recipes/${id}`)
  const data : Data = res.data
  return (
    <>
      <div className="grid grid-cols-12 grid-flow-row p-4 max-w-[1440px] mx-auto">
        <div className="md:col-span-6 col-span-12 relative h-[300px] md:h-[600px]">
          <Image
            className="w-full h-auto mb-4 object-cover"
            fill
            src={`${data.image}`}
            alt="img of food"
            priority
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-1">
            <div className="p-4">
              <h1 className="text-[28px] md:text-[42px] font-semibold">{data.name}</h1>
              <p className='md:text-lg text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                nemo magni in exercitationem sequi temporibus dignissimos.
                Nesciunt ipsa culpa quis nam eaque tempore veritatis, inventore
                consequuntur ea. Aspernatur, quaerat nesciunt.
              </p>
            </div>
            <div className="p-4">
              <ul className="md:text-lg text-base">
                <li className=""><span className='font-semibold'>Serving </span>: {data.servings  }</li>
                <hr className='md:my-3 my-2' />
                <li className=""><span className='font-semibold'>Calories Per Saving</span> : {data.caloriesPerServing}</li>
                <hr className='md:my-3 my-2' />
                <li className=""><span className='font-semibold'>cooking Time </span> : {data.cookTimeMinutes} Minutes</li>
                <hr className='md:my-3 my-2' />
                <li className=""><span className='font-semibold'>cuisine </span> : {data.cuisine}</li>
                <hr className='md:my-3 my-2' />
                <li className=""><span className='font-semibold'>difficulty </span> : {data.difficulty}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 col-span-12" />
        <div className="sm:col-span-6 col-span-12 mt-3 md:mt-4 p-4">
          <h1 className="md:text-[40px] text-[26px]">Method</h1>
          <ul className='list-disc p-4 md:text-lg text-base'>
            {data.instructions.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-6 col-span-12 mt-3 md:mt-4 p-4">
          <h1 className="md:text-[40px] text-[26px]">Ingredients</h1>
          <ul className='list-disc md:text-lg text-base p-4'>
            {data.ingredients.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        </div>
        <hr className='col-span-12 border border-gray-300 mb-6'/>
      </div>
        <div className='max-w-[500px] px-2 mx-auto'>
        <CommentsSection CardId={id}/>
        </div>
    </>
  )
}

export default page
