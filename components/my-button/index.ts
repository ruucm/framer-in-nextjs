import dynamic from "next/dynamic"

const DynamicComponentWithNoSSR = dynamic(() => import("./my-button"), {
  ssr: false,
})

export default DynamicComponentWithNoSSR
