const Pagination = ({ page, setPage, lastPage }) => {
    const scrollTop = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handlePrevButton = () => {
        setPage(page - 1) 
        scrollTop()
    }
    const handleNextPage = () => {
        setPage(page + 1)
        scrollTop()
    }
    return ( 
        <div className="flex justify-center items-center gap-4 my-10 font-bold text-xl text-warnaku-secondary">
            <button onClick={handlePrevButton}
                disabled={page <= 1}
                className={`${page <= 1 ? "disabled:opacity-20" : ""} transition-all hover:text-warnaku-accent p-3 bg-warnaku-accent text-warnaku-primary hover:bg-warnaku-secondary rounded-3xl`}>Prev
            </button>
            <p>{page} dari {lastPage}</p>
            <button onClick={handleNextPage}
                className="transition-all hover:text-warnaku-accent p-3 bg-warnaku-accent text-warnaku-primary hover:bg-warnaku-secondary rounded-3xl">Next
            </button>
        </div>
    );
}
 
export default Pagination;