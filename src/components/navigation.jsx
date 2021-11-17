export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          
          <a className='navbar-brand page-scroll' href='#page-top'>
            Celestial Body Shop
          </a>{' '}
        </div>

        <div
          className='navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#strapin' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#faq' className='page-scroll'>
                F.A.Q
              </a>
            </li>
            <li>
            <a href={'https://twitter.com/celestialbodys'}>
                      <i className='fa fa-lg fa-twitter page-scroll social-button'></i>
                    </a>
            </li>
            <li>
            <a href={'https://discord.gg/ez3DrMj3wX'}>
                      <i className='fab fa-lg fa-discord page-scroll social-button'></i>
                    </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
