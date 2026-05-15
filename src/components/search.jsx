

const Search = ({sch,setSch}) => {
  return (
    <div className="pl-10"><input type="search"  className="w-140 h-15 border-2 border-white/40 rounded-2xl text-white placeholder:text-white/50 pl-5" placeholder="Поиск по названию..." value={sch} onChange={(e)=>{setSch(e.target.value)}}/></div>
  )
}

export default Search