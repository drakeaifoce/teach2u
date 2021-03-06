import { useDebounce } from "../../hooks"

export function SubjectSearch() {
  return (
    <div className="flex justify-center max-w-xl mx-auto px-4 pt-6">
        <input type="search" placeholder="Search" className="input input-bordered flex-1 focus:outline-none"/>
        <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
    </div>
    )
}
