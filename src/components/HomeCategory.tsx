import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hook/useAxois"
import { SetStateAction, useEffect, useState } from "react"
import CustomSelect from "./Select"

interface CategoryType {
    id:string | number,
    name:string,
    isActive:boolean
}


interface CategoryStateType {
    setCategoryId:React.Dispatch<SetStateAction<string | number>>
}


const HomeCategory = ({setCategoryId}:CategoryStateType) => {

const {data = []}  = useQuery({
    queryKey:["categories"],
    queryFn:()  =>  useAxios().get("/categories").then(res => res.data)
})
const [categories, setCategories] = useState<CategoryType[]>(data)


function handleCategoryBtnClick(item:CategoryType):void{
    setCategoryId(item.id)
    let data = {...item, isActive:!item.isActive}
    setCategories(categories.map((obj:CategoryType) => {
        obj.isActive = false 
        return obj.id == item.id ? data : obj
    }))
}

useEffect(() => setCategories(data),[data])

  return (
    <div className="py-[49px] px-[77px] flex items-center justify-between mb-[32px] ">
    <div className="space-x-4" >
        {categories.map((item:CategoryType) => (
            <button onClick={() => handleCategoryBtnClick(item)} className={`py-[13px] px-[20px] ${item.isActive ? "bg-black text-white" : "bg-[#F9F9F9]"} rounded-[30px]`}  key={item.id}>{item.name}</button>
        ) )}
    </div>
          <CustomSelect/>
    </div>
  )
}

export default HomeCategory