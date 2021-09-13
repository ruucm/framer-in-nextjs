import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import { downloadFile } from "@/utils"

const getDynamicComponent = (c: any) => {
  return dynamic(() => import(`@/components/${c}`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  })
}

const TemplatePage = ({ blockName }: any) => {
  const DynamicComponent = getDynamicComponent(blockName)

  return <DynamicComponent />
}

export default TemplatePage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { moduleURL, blockName } = query
  const modulePath = `./components/${blockName}.js`

  try {
    const fs = require("fs")
    if (!fs.existsSync(modulePath)) {
      await downloadFile(moduleURL, modulePath)
      console.log("module file is downloaded")
    }
  } catch (err) {
    console.error(err)
  }

  return {
    props: { blockName },
  }
}
