import {useContext, createContext, useState} from 'react';

const initialStates = {
    tags: [],
    setTags: ()=>{}
}

const MyContext = createContext(initialStates);

const AppProvider = ({children}) => {
    const [tags, setTags] = useState(initialStates.tags);
    <MyContext.Provider value={{tags, setTags}}>
        {children}
    </MyContext.Provider>
}

export default AppProvider;

export const useTags = () => {
    const {tags, setTags} = useContext(MyContext);
    return {tags, setTags};
}