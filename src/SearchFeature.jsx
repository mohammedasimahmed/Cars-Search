import Suggestions from "./Suggestions";

export default function SearchFeature({ handleSubmit, state, setState, filterSugg, suggClick, val, setVal, rmsug }) {
    return (
        <>
            <h1 className="title">Cars</h1>
            <label htmlFor="search" className="labelCarSearch">Vehicle Search , Search by Name or by Type</label>
            <form action="" onSubmit={handleSubmit} className="searchForm">
                <div className="searchContainer">
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="searchBar"
                        id="search"
                        autoComplete="off"
                    />
                    <Suggestions
                        filterSugg={filterSugg}
                        suggClick={suggClick}
                        rmsug={rmsug}
                    />
                    <button className="searchBtn" >SEARCH</button>
                </div>
                {/* <div>hi</div> */}
            </form>

        </>
    )
}
