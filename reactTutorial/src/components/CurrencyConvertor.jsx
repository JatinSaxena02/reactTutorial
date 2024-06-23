import React from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const useMemo=()=>{
  return useCurrencyInfo;
}


function CurrencyConvertor() {
  return <><div>Currency Convertor</div>
  <button onClick={useMemo}>use me</button></>;
}

export default CurrencyConvertor;
