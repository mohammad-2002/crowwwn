import { createContext,useState,useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utilites/firebase/firebase.utilites";

export const UserContext = createContext({
    CurrentUser:null,
    setCurrentUser: ()=> null,
});

export const UserProvider = ({children}) =>{
    const [CurrentUser, setCurrentUser] = useState(null);
    const value = { CurrentUser, setCurrentUser };

    useEffect(() => {
       const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
          console.log(user);
       })
      return unsubscribe;
    }, [])
    
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}