const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__inner'></div>
      <h2 className=''>Loading...</h2>
      <i class='fas fa-spinner'></i>
      <p className=''>
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  )
}

export default Loader
