

export function SubjectCard( {subject} ) {
  return (
    <div className="card w-4/5 bg-base-100 border mx-auto">
        <figure>
            <img src='https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' alt="Math" class="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Математика</h2>
            <div className="card-actions">
                <button className="btn btn-primary">Выбрать</button>
            </div>
        </div>
    </div>      
  )
}
