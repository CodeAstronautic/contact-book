import React,{useState} from 'react'
import SideBar from "./Sidebar";


function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      // Function to close the modal
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <div>
       
         {isModalOpen && <SideBar closeModal={closeModal} />}
         <header>
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start bg-slate-500"
          data-te-navbar-ref>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              <button
                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-7 w-7">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
              </button>
            </div>
            <svg
            onClick={openModal}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-white">
      <path
        fill-rule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clip-rule="evenodd" />
    </svg>
            <div
              className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY"
              data-te-collapse-item>
              <ul
                className="mr-auto flex flex-col lg:flex-row"
                data-te-navbar-nav-ref>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    href="#!"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >Contacts Book</a
                  >
                </li>
               
               
                
              </ul>
            </div>
          </div>
        </nav>

       
      </header>
    </div>
  )
}

export default Header