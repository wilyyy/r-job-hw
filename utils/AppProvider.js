import { useContext, createContext, useState } from "react";

const initialStates = {
   tags: {},
   setTags: () => {},
};

const MyContext = createContext(initialStates);

//Higher order component that will pass the values of tags state throughout entire app
export default function AppProvider({ children }) {
   const [tags, setTags] = useState(initialStates.tags);

   return (
      <MyContext.Provider value={{ tags, setTags }}>
         {children}
      </MyContext.Provider>
   );
}

//Hook i created to be able to access & modify this state in my components
export const useTags = () => {
   const { tags, setTags } = useContext(MyContext);
   return { tags, setTags };
};
