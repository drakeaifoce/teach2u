import Layout from "../components/Layout";
import { TeacherList } from "../components/teachers";

export default function Teachers() {
  return (
    <>
      <TeacherList />
    </>
  )
}

Teachers.getLayout = function getLayout(page) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
