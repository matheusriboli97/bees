import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface UserProviderProps {
  children: ReactNode
}

interface UserContextData {
  name: string;
  setName: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({children}: UserProviderProps) {

  const [name, setName] = useState<string>('');

  return(
    <UserContext.Provider value={{name, setName}}>
      {children}
    </UserContext.Provider> 
  )


}