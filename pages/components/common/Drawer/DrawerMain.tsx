import type { FC } from 'react'
import {Drawer, Box, Typography, Toolbar} from '@mui/material'

interface Props {
  open: boolean;
  onClose: () => void;
  width: number;
}

const DrawerMain: FC<Props> = ({ open, onClose, width }) => {
  return (
    <Drawer
      variant='persistent'
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Toolbar />
      <Box width={width} p={1}>
        <Typography variant="h3" color="secondary">Sidebar</Typography>
      </Box>
    </Drawer>
  )
}
export default DrawerMain