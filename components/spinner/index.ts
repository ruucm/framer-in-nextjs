import dynamic from "next/dynamic"

const DynamicComponentWithNoSSR = dynamic(() => import("./spinner"), {
  ssr: false,
})

export default DynamicComponentWithNoSSR
