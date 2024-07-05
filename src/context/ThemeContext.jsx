import React ,{createContext,useState}from 'react'
export let ThemeStore = createContext();
const ThemeContext = ({children}) => {
    let [theme,setTheme] = useState(localStorage.getItem('theme'));
  return (
    <ThemeStore.Provider value={{theme,setTheme}}>
         {children}
    </ThemeStore.Provider>
     
    
  )
}
export default ThemeContext
