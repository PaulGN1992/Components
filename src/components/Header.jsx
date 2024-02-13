import React, { useState } from "react"


export default function NavbarActionButtonPreview({path, children}) {
  const [isToggleOpen, setIsToggleOpen] = useState(false)


  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="sticky text-xl font-bold top-0 left-0 z-20 w-full max-h-16 bg-grisPg/30 s shadow-pink-700 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-negroPg lg:backdrop-blur-sm lg:after:hidden">
        <div className=" mx-auto max-w-full px-6">
          <nav
            aria-label="main navigation"
            className="flex max-h-14 items-stretch justify-between font-medium text-blancoPg"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div className="flex  items-center gap-2 py-3 text-lg focus:outline-none lg:flex-1">
            <a
              id="logo"
              aria-current={path=== '/' ? 'page' : null}
              href="/"
              className="contents "
              >
            <img className='size-12 hover:brightness-200' 
             src="\pb-fNegro-02.svg" 
             alt="logo-PaulGn"
             aria-label="logo PaulGN" />
            <h2 className='hidden md:inline-block  hover:brightness-200' >Paul Gamarra Neglia</h2>
            </a>
            {/*      <!-- Mobile trigger --> */}
            </div>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-blancoPg transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-blancoPg transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-blancoPg transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-naranjaPg/60 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  aria-current={path=== '/' ? 'page' : null}
                  className={` text-blancoPg hover:brightness-200
                  ${path == '/'? 'underline decoration-limaPg ': ''}
                  flex items-center gap-2 py-4 transition-colors duration-300 focus:text-limaPg focus:outline-none 
                  focus-visible:outline-none lg:px-8 `}
                  href="/"
                >
                  <span>Inicio</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current={path=== '/about' ? 'page' : null}
                  aria-haspopup="false"
                  className={` text-blancoPg hover:brightness-200 
                  ${path == '/about'? 'underline decoration-limaPg ': ''}
                  flex items-center gap-2 py-4 transition-colors duration-300  focus:text-limaPg focus:outline-none 
                  focus-visible:outline-none lg:px-8 `}
                  href="/about"
                >
                  <span>Sobre Mi</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  aria-current={path=== '/contacto' ? 'page' : null}
                  className={` text-blancoPg hover:brightness-200 
                  ${path == '/contacto'? 'underline decoration-limaPg ': ''}
                  flex items-center gap-2 py-4 transition-colors duration-300  focus:text-limaPg focus:outline-none 
                  focus-visible:outline-none lg:px-8 `}
                  href="/contacto"
                >
                  <span>Contáctame</span>
                </a>
              </li>
            </ul>
            {/* <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Prueba Gratis</span>
              </button>
            </div> */}
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  )
}