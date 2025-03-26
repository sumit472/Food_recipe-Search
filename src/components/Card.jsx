const Card = ({ foodDataValue }) => {
  return <>
    <div className="w-full flex flex-wrap pt-15 gap-5 justify-center dark:bg-slate-900 pb-25">
      {!foodDataValue ? "" : foodDataValue.map((currItem, idx) => (

        <div className="flex-wrap w-60 " key={idx}>
          <div className="border border-gray-500 rounded-lg p-2 dark:border dark:border-white ">
            <img src={currItem.strMealThumb} alt="logo" className="w-60 items-center" />
            <p className="dark:text-white">{currItem.strMeal}</p>
            <button className="border border-gray-500 px-2 rounded-lg h-8 w-full mt-5 bg-green-500 font-semibold text-white">Recipe</button>
          </div>
        </div>

      ))}
    </div >
  </>
}
export default Card;