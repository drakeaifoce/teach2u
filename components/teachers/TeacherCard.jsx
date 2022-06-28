
export function TeacherCard() {
    return (
        <div className="card w-4/5 bg-base-100 border mx-auto">
            <figure>
                <img className="mask mask-cirle" src='https://static.vecteezy.com/system/resources/previews/000/899/311/large_2x/teacher-portrait-photo.jpg' alt="Teacher"/>
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
