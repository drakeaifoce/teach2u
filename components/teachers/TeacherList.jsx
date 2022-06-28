import { TeacherCard } from "./TeacherCard"

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
          <TeacherCard key={teacher.id} subject={teacher}/>
      ))}
  </div>
  )
}
