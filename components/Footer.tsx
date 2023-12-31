import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-400  '>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
                <p className='text-base text-gray-800'> Motor Hub <br/> Rights @2023 &copy; </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((link)=>(
                    <div key={link.title} className='footer__link'>
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map((item) => (
                            <Link key ={item.title} href={item.url} className='text-gray-600'>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}

            </div>
            </div>

        {/* terms */}
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10'>
                    <p>Motor Hub <br/> Rights @2023 &copy;</p>
                    <div className='footer__copyrights-links'>
                        <Link href="/" className='text-gray-500'>
                            privacy policy
                        </Link>
                        <Link href="/" className='text-gray-500'>
                            terms of use
                        </Link>
                    </div>
            </div>
        
    </footer>
  )
}

export default Footer