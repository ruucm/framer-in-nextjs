import type { NextPage } from "next"
import Callout from "../components/callout"
import Spinner from "../components/spinner"

const Home: NextPage = () => {
  return (
    <div>
      <Callout
        text="Ma! This is from URL"
        onTap={() => {
          console.log("hi")
        }}
      />
      <Spinner />
    </div>
  )
}

export default Home
