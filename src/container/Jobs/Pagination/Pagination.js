import { useState } from 'react'

const renderedData2 = (jobs) => {
  return (
    <ul className=''>
      {jobs.map((job, index) => {
        return <li className=''></li>
      })}
    </ul>
  )
}

const PaginationTable = ({ data, renderedData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const handleClick = (event) => {
    setCurrentPage(+event.target.value)
  }
  const pages = []
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? 'bg-blue-dark text-white' : ''}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextButton}> &hellip; </li>
  }
  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevButton}> &hellip; </li>
  }
  // const handleLoadMore = () => {
  //   setItemsPerPage(itemsPerPage + 5)
  // }
  return (
    <div>
      {renderedData(currentItems)}
      <ul className='pageNumbers'>
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
          <span
            className=''
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            onClick={handleNextButton}
          >
            Next
            <i className='fas fa-forward ml-2'></i>
          </span>
        </li>
      </ul>
      {/* <button className='button' onClick={handleLoadMore}>
        Load More
      </button> */}
    </div>
  )
}

export default PaginationTable
