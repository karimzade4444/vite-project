

const Top = () => {
    return (
        <div className=" flex justify-between items-center p-10">
            <div>
                <p className=" font-bold text-white text-2xl">МИНИ-CRUD (Классная Работа)</p>
                <p className="text-gray-500">Поиск • Модальные окна • Карточки</p>
            </div>
            <div className="text-white flex justify-center items-center gap-10"><p className=" flex justify-center items-center gap-2" >Всего: <p>1</p></p> <button className=" w-30 h-10 bg-white rounded-2xl text-black cursor-pointer">+ Добавить</button>
            </div>

        </div>
    )
}

export default Top