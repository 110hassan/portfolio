//create context 
//provider
//consumer - useContext hook
import React from "react";

const AppContext = React.createContext(); //We have created a context here

function AppProvider( {children} ){     //here we have created a global context provider. Through 'children' we can provide context to any component or part of the app. 
    return <AppContext.Provider value="Muhammad Hassan">
        {children}
    </AppContext.Provider>
};

export {AppContext , AppProvider};