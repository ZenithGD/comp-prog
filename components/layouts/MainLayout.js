// components/layout.js

import Navbar from '../display/Navbar'
import Footer from '../display/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='mt-14 min-h-screen h-full bg-gray-900'>{children}</main>
            <Footer />
        </>
    )
}