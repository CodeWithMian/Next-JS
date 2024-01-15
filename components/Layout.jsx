import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Dnavbar from './Dnav'

const Layout = ({children}) => {
const router = useRouter()
var pathname = router.pathname
var privatepath = pathname.startsWith("/dashboard")
  return (

    <div>
{
    privatepath ?
     (<>
  <div
          style={{ fontFamily: "Inter" }}
          className="max-h-screen flex flex-col h-screen"
        >
          <div className="w-full">
           <Dnavbar/>
          </div>
          <div className="flex flex-1">
            <Sidebar />
            <div className="overflow-y-auto flex-1 bg-gray-50 shadow-[inset_0px_0px_10px_rgba(56,56,56,0.2)] p-4">
              {/* {pathname === "/portal/profile" ? (
                <>
                  <BreadCrums
                    Heading={pathname.split("/portal/")}
                    BtnText="Add User"
                  />
                </>
              ) : (
                <BreadCrums
                  Heading={pathname.split("/portal/")}
                  BtnText="Add"
                />
              )} */}
              {children}
            </div>
          </div>
        </div>

     </>):
    
    (<>
    
    <Navbar/>
        
        {children}
    </>)
}

    </div>
  )
}

export default Layout
