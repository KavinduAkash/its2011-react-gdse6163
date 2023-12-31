import {useState} from "react";
import Component2 from "./Component2";
import UserContext from "../context/UserContext";

function Component1():JSX.Element {

    const[user, setUser] = useState("ijse");

    return (
        <UserContext.Provider value={user}>
             Component 1
            <Component2 user={user}/>
        </UserContext.Provider>
    )
}

export default Component1;