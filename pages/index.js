import Layout  from "../components/Layout"

export default function Home() {
  return (
    <div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
        <>{page}</>
    </Layout>
  )
}