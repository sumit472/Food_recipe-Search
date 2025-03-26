const FoodItems = ({ SearchValue, handlerOnSetValue, search }) => {

  return <>
    <div className="w-screen  dark:bg-slate-900 dark:text-white">
      <div className="flex justify-center items-center pt-20 gap-1.5">
        <input type="text" placeholder="Enter Recipe Name! : " className="border border-gray-500 w-50 md:w-100 h-10 pl-3 rounded-md text-lg font-semibold" value={search} onChange={handlerOnSetValue} />
        <button className="border border-gray-500 h-10 font-semibold px-3 rounded-md bg-green-500 hover:bg-green-700 cursor-pointer text-xl" onClick={SearchValue}>Search</button>
      </div>
    </div>
  </>
}
export default FoodItems;