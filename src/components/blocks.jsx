

const Blocks = ({data}) => {
  return (
    <div className=" grid grid-cols-3 place-items-center pt-20">
        {data.map((el)=>{
            return (
                <div key={el.id} className="w-120 h-100 bg-white/10 rounded-2xl border-4 border-gray-500"><div><img src={el.url} alt=""  className="w-full h-60 rounded-t-2xl"/></div> <div className="p-5"><p className="font-bold text-2xl text-white">{el.name}</p><p className="text-gray-400 truncate w-100 ">{el.title}</p><div className="pt-5 flex justify-between items-center"><button className="w-30 h-10 border-2 border-white/70 bg-white/0 rounded-xl text-white font-bold cursor-pointer">Просмотр</button><button  className="w-30 h-10  bg-white rounded-xl text-black font-bold cursor-pointer">Удалить</button></div></div></div>
            )
        })}


    </div>
  )
}

export default Blocks