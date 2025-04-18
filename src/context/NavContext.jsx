import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [openFlag, setOpenFlag] = useState(false);

    return (
        <NavContext.Provider value={{ openFlag, setOpenFlag }}>
            {children}
        </NavContext.Provider>
    );
};
