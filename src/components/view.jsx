

const View = ({selectedItem,openView,setOpenView}) => {
  return (
    
    <> 
    {openView && ( <div className=" absolute inset-0 bg-black/50 z-10 flex justify-center items-center backdrop-blur-sm text-white">
            <div key={selectedItem.id} className="w-180 h-120 bg-black border border-gray-400 rounded-2xl  p-5"><div className=" flex justify-between items-center "><p className="text-white font-bold text-2xl ">Предпросмотр</p> <p className="text-gray-400 cursor-pointer" onClick={()=>{setOpenView(false)}} >Закрыть</p></div>
                <div className="w-full h-70 pt-5"><img src={selectedItem.url} alt="" className="w-full h-full rounded-2xl" /></div>
                <div>
                    <p className="pt-5 font-bold text-2xl">{selectedItem.name}</p>
                    <p className="text-gray-400 pt-2">{selectedItem.title}</p>
                    <p className="text-gray-500 pt-5">id:{selectedItem.id}</p>
                </div>
            </div>
        </div>
)}
        </> 
  )
}

export default View