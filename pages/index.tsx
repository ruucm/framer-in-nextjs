import type { NextPage } from "next"
import Spinner from "https://framer.com/m/Spinner-ROUC.js@0GSNOTHhdO63Aj2fKX4W"

const Home: NextPage = () => {
  return (
    <div>
      <Spinner spinnerImage={defaultSpinnerImage} />
      <Spinner spinnerImage="/blue.svg" style={{ width: 100, height: 100 }} />
    </div>
  )
}

export default Home

// still manually injecting needed
const defaultSpinnerImage =
  "data:image/png;base64,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"
