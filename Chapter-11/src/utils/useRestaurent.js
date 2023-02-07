import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurent = (resId) => {
  //create a state for this hook to fetch data logic
  const [restaurent,SetRestaurent] = useState(null);
  
  //Get data from api using useSffect hook
  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    SetRestaurent(json.data);''
  }

  //return restaurent data
  return restaurent;
}

export default useRestaurent;