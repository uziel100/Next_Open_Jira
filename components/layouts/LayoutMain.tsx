import { Box } from '@mui/material'
import Head from 'next/head';
import { FC, useContext } from 'react'
import { UIContext } from '../../context/ui';
import { DrawerMain } from '../common/Drawer';
import { Navbar } from '../common/Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string 
}

const DRAWER_WIDTH = 256;

const LayoutMain: FC<Props> = ({ children, title = "Open jira" }) => {

  const { openSidebar, closeSidebar, sidebarOpen } = useContext(UIContext)

  return (
    <Box flexGrow={1}>
      <Head>
        <title>{title}</title>
      </Head>
      
      <Navbar toogleMenu={sidebarOpen? closeSidebar: openSidebar } />
      <DrawerMain width={DRAWER_WIDTH} open={sidebarOpen} onClose={closeSidebar} />
      
      <Box 
        marginLeft={sidebarOpen ? `${DRAWER_WIDTH}px` : 0} 
        padding="10px 20px"
        sx={{
          transition: 'margin-left 300ms ease'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
export default LayoutMain