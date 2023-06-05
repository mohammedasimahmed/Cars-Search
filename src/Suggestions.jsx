export default function Suggestions({ suggest , filterSugg ,suggClick }) {
    return (
        <div className="suggestionsContainer">
            {
                filterSugg.map((item)=>{
                    const id = Math.floor(Math.random() * 100000000 + 1);
                    return (
                        <div className="suggestion" key={id} onClick={()=>suggClick(item.name)} >{item.name}</div>
                    )
                })
            }
        </div>
    )
}