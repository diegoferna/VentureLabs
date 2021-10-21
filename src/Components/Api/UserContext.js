import React from 'react';


export const UserContext = React.createContext({})

export const GlobalStorage = ({children}) => {
    const [user, setUser] = React.useState({})


    function addUser (dados) {
        setUser(dados)
    }

    return <UserContext.Provider value={addUser}>
                {children}
           </UserContext.Provider>
}