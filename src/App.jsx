import React, { useEffect, useState } from "react";
import "./App.css";
import Cars from "./Cars";
import SearchFeature from "./searchFeature";
import { carsArr } from "./carsdata";

export default function App() {
  const [state, setState] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [filterSugg, setFilterSugg] = useState([]);
  const [attr, setAttr] = useState("");

  useEffect(() => {
    func();
    filter();
    suggest();
    console.log(state);
  }, [state]);
  useEffect(() => {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    setFilterArr(
      carsArr.filter((item) =>
        item[attr]?.toLowerCase()?.startsWith(state.toLowerCase().trim())
      )
    );
  }, [filterSugg]);
  useEffect(() => {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    setFilterArr(
      carsArr.filter((item) =>
        item[attr]?.toLowerCase()?.startsWith(state.toLowerCase().trim())
      )
    );
  }, [attr]);


  function handleSubmit(e) {
    e.preventDefault();
  }
  function func() {
    if (
      "deluxe car".startsWith(state.toLowerCase().trim()) ||
      "sports car".startsWith(state.toLowerCase().trim()) ||
      "passenger car".startsWith(state.toLowerCase().trim())
    ) {
      setAttr("type");
    }
    else {
      setAttr("name");
    }
  }
  function filter() {
    if (state === "" || state.trim() === "") {
      setFilterArr([]);
      return;
    }
    setFilterArr(
      carsArr.filter((item) =>
        item[attr]?.toLowerCase()?.startsWith(state.toLowerCase().trim())
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
        item[attr]?.toLowerCase()?.startsWith(state.toLowerCase().trim())
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
