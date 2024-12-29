import React from 'react'

interface Props{
  category : string,
  HandleCategory : (a : string) => void,
}

const CategoryButton = ({category, HandleCategory} : Props)  => {
  function setCategory(){
    HandleCategory(category)
  }

  return (
    <button onClick={setCategory} className='px-3 py-2 rounded-lg focus:ring-1 focus:ring-gray-400 focus:bg-green-400 hover:bg-green-400  focus:outline-none border border-gray-400'>
    {category}
   </button>
  )
}

export default CategoryButton