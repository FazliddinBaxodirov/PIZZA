import {  PizzaImg, SaveIcon } from "../assets/icons"

const Header = () => {
  return (
    <header className="flex py-[49px] px-[77px] justify-between border-b-2">
    <div className="flex gap-[17px] items-center">
    <div>
     <PizzaImg/>
    </div>
    <div>
     <h1 className="text-[24px] font-bold">REACT PIZZA</h1>
     <span className="text-[#7B7B7B] text-[16px] font-medium">самая вкусная пицца во вселенной</span>
    </div>
    </div>
    <div className="bg-[#FE5F1E] p-3 rounded-full flex items-center gap-3 h-[40px]">
    <p className="text-white pr-[5px] border-r-[1px]">520p</p>
    <SaveIcon />
    </div>
  </header>
  )
}

export default Header