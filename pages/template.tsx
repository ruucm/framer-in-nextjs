import { useRouter } from "next/dist/client/router"
import dynamic from "next/dynamic"

const getDynamicComponent = (c: any) =>
  dynamic(() => import(`../components/${c}`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  })

const Test = () => {
  const router = useRouter()
  const { component } = router.query

  const DynamicComponent = getDynamicComponent(component)

  return <DynamicComponent />
}

export default Test
