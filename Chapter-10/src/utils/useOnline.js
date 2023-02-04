import { useState , useEffect } from "react";

const useOnline = () => {
  // create a state that maintains switching b/w online and offline
  const [isOnline,setIsOnline] = useState(true)

  useEffect(() => {

    const handleOnline = () =>{
      setIsOnline(true);
    }
    const handleOffline = () =>{
      setIsOnline(false);
    }

    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);

    return () =>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline",handleOffline);
    }
  }, [])

  return isOnline;//returns true or false
};

export default useOnline;