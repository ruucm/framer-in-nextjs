import type { NextPage } from "next"
import Spinner from "../components/spinner"

const Home: NextPage = () => {
  return (
    <div>
      <Spinner />
      <Spinner spinnerImage="/blue.svg" size="100px" />
    </div>
  )
}

export default Home
