import Layout from "../components/Layout";

export default function Support() {
  return (
    <div>support</div>
  )
}

Support.getLayout = function getLayout(page) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
