import { createContext } from 'react'

export interface ContextProps {
  sidebarOpen: boolean;

  // methods
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps)