import React, { useEffect, useState } from "react";
import "./App.css";
import Cars from "./Cars";
import SearchFeature from "./SearchFeature";
import { carsArr } from "./Carsdata";

export default function App() {
  const [state, setState] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [filterSugg, setFilterSugg] = useState([]);
  const [val, setVal] = useState(false);
  const [rmsug,setrmSug] = useState(true);
  const [storeState, setstoreState] = useState("");
  // let attr = ""

  useEffect(() => {
    func();
    filter();
    suggest();
    // console.log(attr)
    storeState!==state && setrmSug(true)
    console.log(state);
    console.log(storeState);
  }, [state]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function func() {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    // else if (
    //   "luxury car".startsWith(state.toLowerCase().trim()) ||
    //   "sports car".startsWith(state.toLowerCase().trim()) ||
    //   "passenger car".startsWith(state.toLowerCase().trim())
    // ) {
    //   attr="type"
    // }
    // else {
    //   attr="title"
    // }
  }
  function filter() {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    setFilterArr(
      carsArr.filter((item) =>
      item["title"].toLowerCase().startsWith(state.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(state.toLowerCase().trim())
        // (item["title"].toLowerCase().startsWith(state.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(state.toLowerCase().trim()))
        // ||(state.length>=3 && item["title"].toLowerCase().includes(state.toLowerCase().trim()))
        // item["title"].toLowerCase().includes(state.toLowerCase().trim())
      )
    );
  }

  function suggest() {
    if (state === "" || state.trim() === "") {
      setFilterSugg([]);
      return;
    }

    setFilterSugg(
      carsArr.filter((item) =>
      item["title"].toLowerCase().startsWith(state.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(state.toLowerCase().trim())
      // (item["title"].toLowerCase().startsWith(state.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(state.toLowerCase().trim()))
      // ||(state.length>=3 && item["title"].toLowerCase().includes(state.toLowerCase().trim()))
      // item["title"].toLowerCase().includes(state.toLowerCase().trim())
      )
    );
  }

  function suggClick(title) {
    // storeState = title;  
    setstoreState(title)  
    setState(title);
    setrmSug(false)
  }

  return (
    <>
      <SearchFeature
        handleSubmit={handleSubmit}
        state={state}
        setState={setState}
        filterSugg={filterSugg}
        suggClick={suggClick}
        val={val}
        setVal={setVal}
        rmsug={rmsug}
      />
      <Cars
        filterArr={filterArr}
        state={state}
        carsArr={carsArr}
        setFilterArr={setFilterArr}
        setFilterSugg={setFilterSugg}
      />
      {/* <VoiceSearch setState={setState}/> */}
    </>
  );
}


