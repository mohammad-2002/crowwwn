import { createContext,useEffect,useReducer } from "react";
import { USER_ACTION_TYPES } from "../store/user/user.type";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utilites/firebase/firebase.utilites";

export const UserContext = createContext({
    CurrentUser:null,
    setCurrentUser: ()=> null,
});

const userReducer = (state,action)=>{
    const {type, payload} = action;
    
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                CurrentUser:payload
            }
                
            default:
            throw new Error("Something wrong happend")
    }
}


const INITAL_STATE={
    CurrentUser:null
}

export const UserProvider = ({children}) =>{
    // const [CurrentUser, setCurrentUser] = useState(null);
    const [{CurrentUser},dispatch] = useReducer(userReducer, INITAL_STATE)
    console.log(CurrentUser);

    const setCurrentUser = (user)=>{
        dispatch({type:'SET_CURRENT_USER',payload:user})
    };
    const value = { CurrentUser, setCurrentUser };

    useEffect(() => {
       const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
        //   console.log(user);
       })
      return unsubscribe;
    }, [])
    
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}