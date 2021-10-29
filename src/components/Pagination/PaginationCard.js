const PaginationCard = ({
  currentPage,
  pages,
  handlePrevButton,
  handleNextButton,
  pageDecrementBtn,
  pageIncrementBtn,
  renderPageNumbers,
}) => {
  return (
    <ul className='pageNumbers py-5'>
      <li>
        <button
          className=''
          disabled={currentPage === pages[0] ? true : false}
          onClick={handlePrevButton}
        >
          <i className='fas fa-backward mr-2'></i>Prev
        </button>
      </li>
      {pageDecrementBtn}
      {renderPageNumbers}

      {pageIncrementBtn}
      <li>
        <button
          className=''
          disabled={currentPage === pages[pages.length - 1] ? true : false}
          onClick={handleNextButton}
        >
          Next
          <i className='fas fa-forward ml-2'></i>
        </button>
      </li>
    </ul>
  )
}

export default PaginationCard
