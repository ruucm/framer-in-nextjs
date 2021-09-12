import dynamic from "next/dynamic"

const DynamicComponentWithNoSSR = dynamic(() => import("./callout"), {
  ssr: false,
})

export default DynamicComponentWithNoSSR
