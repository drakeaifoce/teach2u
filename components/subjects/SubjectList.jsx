import { SubjectCard } from "./"

export function SubjectList() {
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
        {data?.map((subject) => (
            <SubjectCard key={subject.id} subject={subject}/>
        ))}
    </div>
  )
}
