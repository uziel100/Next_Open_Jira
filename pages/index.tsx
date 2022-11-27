import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import { NextPageWithLayout } from './_app'
import { LayoutMain } from './components/layouts'

const Home: NextPageWithLayout = () => {
  return (
    <div >
        <Typography variant="h1" color="primary">Welcome in next js with MUI</Typography>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <LayoutMain title='Home | Open Jira'>
      {page}
    </LayoutMain>
  )
}

export default Home;
