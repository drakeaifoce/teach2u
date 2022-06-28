
export function AuthForm() {
  return (
    <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label for="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
            <label for="my-modal-4" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="form-control w-full max-w-xs mx-auto">
                    <h3 className="text-lg font-bold md-auto ">Войти</h3>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email@mail.com" className="input input-bordered w-full max-w-xs focu" />
                    <label className="label">
                        <span className="label-text">Пароль</span>
                    </label>
                    <input type="text" placeholder="email@mail.com" className="input input-bordered w-full max-w-xs focu" />
                    <label className="label cursor-pointer">
                        <span className="label-text">Remember me</span> 
                        <input type="checkbox"  className="checkbox" />
                    </label>
                    <a className="link link-hover text-">Нет аккаунта? Зарегистрируйтесь</a>
                </div>
            </label>
        </label>
    </>
  )
}
