
export function TeacherCard() {
    return (
        <div className="card w-4/5 bg-base-100 border mx-auto">
            <figure className="mask mask-circle">
                <img className="" src='https://static.vecteezy.com/system/resources/previews/000/899/311/large_2x/teacher-portrait-photo.jpg' alt="Teacher"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Математика</h2>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                </div>
                <p>Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
                <div className="card-actions w-full">
                    <button className="btn btn-primary w-full">Подробнее</button>
                </div>
            </div>
        </div>      
      )
}
