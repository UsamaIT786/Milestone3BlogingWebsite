
"use client"
import React, { useEffect, useState } from 'react'
import CategoryButton from './CategoryButton'
import Card from './Card'
interface Props{
    categories : string[],
    recipes : Data[]
    
}

interface Data{
    id: string,
    image: string,
    name: string,
    tags:[],
    ingredients: [],
    mealType:string[]
}

const Filter = ({categories, recipes} : Props) => {
    const [Dishes, setDishes] = useState<Data[]>(recipes);
    const [Selectedcategory, setSelectedCategory] = useState("All");

    function HandleCategory(clicked : string){
        setSelectedCategory(clicked)
        
    }

    function filterDishes(){
        const filterdList = recipes.filter((recipe) => recipe.mealType[0] === Selectedcategory)
        if(filterdList.length !== 0){
            setDishes(filterdList)
        }else{
            setDishes(recipes)
        }
    }

    useEffect(()=>{
        filterDishes()
    },[Selectedcategory])

  return (
    <>
         <div className='max-w-[813px] mx-auto px-[16px] text-center min-h-400px'>
        <div className='max-w-[420px] mx-auto'>
        <h1 className='xl:text-[40px] md:text-[30px] text-[24px] font-bold leading-[40px] lg:mb-[12px] mb:8px'>EMBARK ON A JOURNEY</h1>
        <p className=''>With our diverse collection of recipes we have something to satisfy every palate.</p>
        </div>
        <div className='flex justify-between w-full gap-y-2 flex-wrap h-auto lg:my-[40px] my-[24px]'>
            <button autoFocus onClick={()=> setSelectedCategory("All")} className='px-3 py-2 rounded-lg focus:ring-1 focus:ring-gray-400  focus:outline-none focus:bg-green-400 hover:bg-green-400 border border-gray-400'>
                All
            </button>
            {categories.map((category, ind) => (
              <CategoryButton key={ind} HandleCategory={HandleCategory}  category={category} />
            ))}
        </div>
    </div>
    <h1 className="sm:px-6 px-[16px] xl:text-[40px] md:text-[30px] text-[24px]">Featured Recipes : <span className='xl:text-[30px] md:text-[24px] text-[18px] italic text-red-500'>{Selectedcategory}</span></h1>
    <div className="flex px-[16px] flex-wrap max-w-[1440px] mx-auto gap-4 p-4 justify-center ">
      {Dishes.map((data : Data) => (
      <Card key={data.id} data={data}/>
    ))}
    </div>
    </>
  )
}

export default Filter
