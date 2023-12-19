export default function Cars({ filterArr, state, carsArr }) {
    return (
        <div className="carContainer">
            {state.toLowerCase().trim() !== "all" && filterArr.length === 0 && <h1>No cars</h1>}
            {
                state.toLowerCase().trim() === "all" && (
                    carsArr.map((item) => {
                        const id = Math.floor(Math.random() * 100000000 + 1);
                        return (
                            <div className="car" key={id}>
                                <img src={item.image} alt="" className="carImg" />
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })
                )
            }
            {
                state.trim() !== "all" && (filterArr.map((item) => {
                    const id = Math.floor(Math.random() * 100000000 + 1);
                    return (
                        <div className="car" key={id}>
                            <img src={item.image} alt="" className="carImg" />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
                )
            }
        </div>
    )
}
