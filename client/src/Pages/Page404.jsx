import React from 'react'

const Page404 = () => {
  return (
    <>
        <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{
            backgroundImage: `url(${sectionbanner})`,
        }}
        >
            <div className="section-content z-0 text-center">
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Page Not Found
                </h4>
                <ul className="flex items-center flex-wrap justify-center gap-2">
                <li>
                    <Link
                    to='/'
                    className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                    >
                    </Link>
                </li>
                <span className='text-secondary'></span>
                <li>
                    <Link to='/pagenotfound' className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">Page Not Found</Link>
                </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Page404