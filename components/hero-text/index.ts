import dynamic from "next/dynamic"

const DynamicComponentWithNoSSR = dynamic(() => import("./hero-text"), {
  ssr: false,
})

export default DynamicComponentWithNoSSR
