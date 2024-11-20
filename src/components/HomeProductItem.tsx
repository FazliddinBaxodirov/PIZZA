import { AddIcon } from "../assets/icons"
import { ProductType } from "./HomeProducts"
import PriceSegment from "./PriceSegment"
import TypeSegment from "./TypeSegment"

const HomeProductItem:React.FC<{item:ProductType}> = ({item}) => {
  return (
    <div >
        <div className="w-[280px] ">
         <img src={item.img} alt="Pizza img" width={259}/>
         <h2 className="text-center font-bold text-[20x] mt-[11px] pb-[22px]">{item.title}</h2>
         <div className="flex-col w-full">
         <TypeSegment/>
         <PriceSegment/>
         </div>
         <div className="flex items-center justify-between pt-[17px]">
         <div>
         <span className="font-bold text-[22px]">{item.price}</span>
         </div>
         <div>
         <button className=" flex  items-center py-[11px] text-[#EB5A1E] p-[17px] hover:text-white hover:bg-[#EB5A1E] gap-3 border-[#EB5A1E] border-[1px] rounded-full">
        <span className="hover:text-white"><AddIcon /></span>
          <p>Добавить</p>
         </button>
         </div>
         </div>
        </div>
    </div>
  )
}

export default HomeProductItem
