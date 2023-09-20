import TableQuiz from "../components/TableQuiz";
import Play from "../pages/Play";
import userContext from "../useContext/useContextCreate";
import { useState } from "react";
function ContextApiapp()
{
    const [data] = useState ( () => {
        const savedItem = localStorage.getItem("questions");
       const parsedItem = JSON.parse(savedItem);
       return parsedItem || "";
       });
       
    return(
        <div>
            <userContext.Provider value={[data]}>
                <Play/>
                <TableQuiz/>
            </userContext.Provider>
        </div>
    );

}
export default ContextApiapp;