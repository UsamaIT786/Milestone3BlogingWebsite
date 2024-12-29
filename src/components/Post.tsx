import axios from "axios"
import Filter from "./Filter";

interface Data{
    id: string,
    image: string,
    name: string,
    tags:[],
    ingredients: [],
    mealType:string[]
}

const Posts = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    const recipes : Data[]= res.data.recipes;
    const categories = Array.from(new Set(recipes.map((val) => val.mealType[0])));
    console.log(categories)
    return (
    <>
    <Filter categories={categories} recipes={recipes} />
    </>
  )
}

export default Posts