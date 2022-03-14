import {useContext, createContext, useState} from 'react';

const initialStates = {
    tags: [],
    setTags: ()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {
    const [tags, setTags] = useState(initialStates.tags);

    return (
        <MyContext.Provider value={{tags, setTags}}>
            {children}
        </MyContext.Provider>
    )
}

export const useTags = () => {
    const {tags, setTags} = useContext(MyContext);
    return {tags, setTags};
}