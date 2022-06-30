import { TeacherItem } from "./TeacherItem"

export function TeacherList() {
    const data = [{
      id: 1
  },
  {
      id: 2
  },
  {
      id: 3
  },
  {
      id: 4
  },
      
  ]
return (
  <div className="grid grid-cols-3 gap-12 my-12">
      {data?.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher}/>
      ))}
  </div>
  )
}
