
export function AuthForm() {
  return (
    <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label for="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
            <label for="my-modal-4" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold md-auto">Войти</h3>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email@mail.com" class="input input-bordered w-full max-w-xs focu" />
                    <label class="label">
                        <span class="label-text">Пароль</span>
                    </label>
                    <input type="text" placeholder="email@mail.com" class="input input-bordered w-full max-w-xs focu" />
                </div>
            </label>
        </label>
    </>
  )
}
