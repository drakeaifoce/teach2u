import Layout from "../components/Layout";
import { SubjectList, SubjectSearch } from "../components/subjects";

export default function Subjects() {
  return (
    <>
      <SubjectSearch />
      <SubjectList />
    </>
  )
}

Subjects.getLayout = function getLayout(page) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
