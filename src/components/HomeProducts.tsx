import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hook/useAxois"
import { useEffect, useState } from "react"
import HomeProductItem from "./HomeProductItem"

interface HomeProductsType {
    categoryId:number | string
}

export  interface ProductType {
    id:string | number,
    img:string,
    title:string,
    typeID:number,
    sizeId:number,
    price:string,
    savedCount:number
}


const HomeProducts = ({categoryId}:HomeProductsType) => {

    const {data = []} = useQuery({
        queryKey:['products',categoryId],
        queryFn:() => useAxios().get(`/products?categoryId=${categoryId == 1 ? "" : categoryId}`).then(res => res.data)
    })
 
    const [products, setProduct] = useState<ProductType[]>(data)
    
    useEffect(() =>setProduct(data),[data])
  return (
    <>
    <h3 className="pt-[32px] pl-[67px] font-bold text-[32px]">Все пиццы</h3>
    <div className="flex flex-wrap items-center justify-between gap-[40px] pb-[30px] px-[77px]">
        {products.map((item:ProductType) =><HomeProductItem key={item.id} item={item}/>)}
    </div>
    </>
  )
}

export default HomeProducts