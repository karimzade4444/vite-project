

const Blocks = ({data}) => {
  return (
    <div>
        {data.map((el)=>{
            return (
                <div key={el.id} className="w-50 h-40 bg-black"></div>
            )
        })}


    </div>
  )
}

export default Blocks