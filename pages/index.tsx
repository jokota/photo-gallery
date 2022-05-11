import type { NextPage } from 'next'

import "@aws-amplify/ui-react/styles.css";
import { NavBar } from '../src/ui-components'

const Home: NextPage = () => {
  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default Home
