import { createContext, useContext, useReducer } from "react";

export const StateBucketContext = createContext();

export const StateBucket = ({reducer, initialState, children}) => (
    <StateBucketContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateBucketContext.Provider>
)

export const StateBucketValue = () => useContext(StateBucketContext)