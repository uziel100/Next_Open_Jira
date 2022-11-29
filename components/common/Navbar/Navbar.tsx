import type { FC} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

interface Props {
  toogleMenu: () => void
}

const Navbar: FC<Props> = ({ toogleMenu }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton onClick={toogleMenu} edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          Open jira
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar