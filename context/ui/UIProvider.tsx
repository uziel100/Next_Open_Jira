import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
  sidebarOpen: boolean;
}


export const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false
}

interface Props {
  children: JSX.Element | JSX.Element[]
} 

export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSidebar = () => dispatch({ type: 'UI- Open Sidebar' })
  const closeSidebar = () => dispatch({ type: 'UI- Close Sidebar' })
  
  return (
    <UIContext.Provider value={{
      ...state,
      // methods
      openSidebar,
      closeSidebar
    }}>
      {children}
    </UIContext.Provider>
  )
}