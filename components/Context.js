import React, { useState } from "react";
 
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
 
    return (
        <Context.Provider value={{ mobileMenu, setMobileMenu }}>
            {children}
        </Context.Provider>
    );
};