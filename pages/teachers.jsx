import Layout from "../components/Layout";

export default function Teachers() {
  return (
    <div>teachers</div>
  )
}

Teachers.getLayout = function getLayout(page) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
