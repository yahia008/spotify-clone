import { createContext, useReducer, useContext } from "react";

export  const StateContext = createContext()




const DataLayer = ({initialState, reducer, children}) => {
    return (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
    )
}

export const useDatalayerValue =() => useContext(StateContext)
export default DataLayer
