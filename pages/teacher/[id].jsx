import Layout  from "../../components/Layout"

export default function TeacherPage () {
  return (
    <div>ya</div>
  )
}

TeacherPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}

