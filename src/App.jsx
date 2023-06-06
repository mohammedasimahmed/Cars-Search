import React, { useEffect, useState } from "react";
import "./App.css";
import Cars from "./Cars";
import SearchFeature from "./searchFeature";
import { carsArr } from "./carsdata";

export default function App() {
  const [state, setState] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [filterSugg, setFilterSugg] = useState([]);
  
  let attr = ""

  useEffect(() => {
    func();
    filter();
    suggest();
    console.log(attr)
    console.log(state);
  }, [state]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function func() {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    else if (
      "luxury car".startsWith(state.toLowerCase().trim()) ||
      "sports car".startsWith(state.toLowerCase().trim()) ||
      "passenger car".startsWith(state.toLowerCase().trim())
    ) {
      attr="type"
    }
    else {
      attr="name"
    }
  }
  function filter() {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    setFilterArr(
      carsArr.filter((item) =>
        item[attr].toLowerCase().startsWith(state.toLowerCase().trim())
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
        item[attr].toLowerCase().startsWith(state.toLowerCase().trim())
      )
    );
  }

  function suggClick(name) {
    setState(name);
  }

  return (
    <>
      <SearchFeature
        handleSubmit={handleSubmit}
        state={state}
        setState={setState}
        suggest={suggest}
        filterSugg={filterSugg}
        suggClick={suggClick}
      />
      <Cars
        filterArr={filterArr}
        state={state}
        carsArr={carsArr}
        setFilterArr={setFilterArr}
        setFilterSugg={setFilterSugg}
      />
    </>
  );
}
