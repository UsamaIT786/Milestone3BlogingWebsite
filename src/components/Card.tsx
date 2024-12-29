
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
    data: {
    id: string,
    image: string,
    name: string,
    tags:[],
    ingredients: []
  }
}

const Card = ({data} : Props) => {
    const tagColors = ["bg-blue-500","bg-gray-500","bg-green-500","bg-red-500","bg-yellow-500","bg-cyan-500","bg-gray-800"]
    
  return (
    <>
        <div
          className="shadow-lg bg-white flex flex-col rounded-lg w-[18rem]"
          key={data.id}
        >
          <div className='w-[18rem] h-auto'>
          <Image
            className="w-[18rem] h-auto object-cover rounded-t-lg"
            width={288}
            height={288}
            src={data.image}
            alt="recipe image"
            priority
          />
          </div>
          <div className="flex flex-col justify-between p-4 flex-1">
            <div className="mb-2">
              <h5 className="text-lg font-bold" style={{ color: "#633b2d" }}>
                {data.name}
              </h5>
              <p className="text-sm mt-2">
                {data.tags.map((tag, ind) => (
                  <span
                    className={`inline-block rounded-lg px-2 py-1 text-white m-1 ${tagColors[ind % data.ingredients.length]}`}
                    key={ind}
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </div>
            <div>
                <Link
                  href={`dish/${data.id}`}
                  className="no-underline text-black bg-yellow-300"
                >
              <button className="bg-yellow-500 border-none text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400">
                  Details
              </button>
                </Link>
            </div>
          </div>
        </div>
      </>
  )
}

export default Card
