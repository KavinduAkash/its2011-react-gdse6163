import {useContext} from "react";
import UserContext from "../context/UserContext";
function Component3():JSX.Element {

    const user = useContext(UserContext);

    return (
        <div>
            Component 3: {user}
        </div>
    )
}
export default Component3;