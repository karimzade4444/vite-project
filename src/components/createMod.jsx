

const CreateMod = ({openCreatModal, setOpenCreatModal, createName,setCreateName,createUrl,setCreateUrl,createTitle,setCreateTitle,handleSave}) => {
    return (
        <>
        {openCreatModal && (<div className=" absolute inset-0 bg-black/50 z-10 flex justify-center items-center backdrop-blur-sm text-white">
            <div className="w-120 h-120 bg-black border border-gray-400 rounded-2xl leading-12 p-5"><div className=" flex justify-between items-center "><p className="text-white font-bold text-2xl ">Новый материал</p> <p className="text-gray-400 cursor-pointer" onClick={()=>{setOpenCreatModal(false)}}>Закрыть</p></div>
                <div><p>Название*</p><input type="text" name="" id="" value={createName} onChange={(e)=>{setCreateName(e.target.value)}} placeholder="Например.: JavaScript" className="w-full h-12 border-2 border-white rounded-2xl pl-3" /></div>
                <div><p>Ссылка на изображение*</p><input type="text" name="" id="" value={createUrl} onChange={(e)=>{setCreateUrl(e.target.value)}} placeholder="https://..." className="w-full h-12 border-2 border-white rounded-2xl pl-3" /></div>
                <div><p>Описание</p><input type="text" name="" id="" value={createTitle} onChange={(e)=>{setCreateTitle(e.target.value)}} placeholder="Коротко опишите материал." className="w-full h-12 border-2 border-white rounded-2xl pl-3" /></div>
                <div className=" flex justify-center items-center gap-5 pt-12 pl-50"><button className="w-25 h-12 cursor-pointer  rounded-xl border-2 border-white font-bold" onClick={()=>{setOpenCreatModal(false)}}>Отмена</button><button className="w-25 h-12 cursor-pointer  rounded-xl bg-white text-black font-bold" onClick={handleSave}>Создать</button></div>
            </div>
        </div>)}
        </>
    )
}

export default CreateMod