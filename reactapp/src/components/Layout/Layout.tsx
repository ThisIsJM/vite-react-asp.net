import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children} : {children: ReactNode}) {
  return (
    <div className='min-h-screen relative'>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
