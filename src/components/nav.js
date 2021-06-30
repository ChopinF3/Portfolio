function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container d-flex justify-content-between'>
        <a className='navbar-brand color__yellow' href='#'>
          dThird
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='color__white'>•••</span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav g-5'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                .skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                .works
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                .contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar