export default function Suggestions({  filterSugg ,suggClick ,rmsug  }) {
    return (
        <div className="suggestionsContainer">
            {
                rmsug &&(filterSugg.map((item)=>{
                    const id = Math.floor(Math.random() * 100000000 + 1);
                    return (
                        <div className="suggestion" key={id} onClick={()=>suggClick(item.title)} >{item.title}</div>
                    )
                })
                )
            }
        </div>
    )
}
