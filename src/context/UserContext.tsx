import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Chip } from "../models/Chip.model";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  chipDetails: Chip;
  showChip: (chip: Chip) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [name, setName] = useState<string>("");
  const [chipDetails, setChipDetails] = useState<Chip>({
    message: "",
    show: false,
    success: true,
  });

  const showChip = (chip: Chip): void => {
    setChipDetails({
      message: chip.message,
      show: true,
      success: chip.success,
    });
    setTimeout(() => {
      setChipDetails({
        message: "",
        show: false,
        success: true,
      });
    }, 3000);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        showChip,
        chipDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
