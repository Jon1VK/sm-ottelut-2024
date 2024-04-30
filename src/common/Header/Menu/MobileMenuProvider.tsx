"use client";

import {
  createContext,
  useContext,
  useState,
  type Context,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

const MobileMenuContext = createContext(null) as unknown as Context<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>;

export const useMobileMenuContext = () => useContext(MobileMenuContext);

const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
