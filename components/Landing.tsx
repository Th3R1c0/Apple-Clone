import React from 'react'
import Button from "./Button";
import Image from 'next/image'
function Landing() {
  return (
    <>

    <section className='sticky z-10 top-0 mx-auto flex h-screen w-max items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className=' space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span>
                <span className='block'>By Intellect</span>
                <span className='block'>Driven By Values</span>
            </h1>

            <div className="space-x-8">
                <Button title="Buy Now" />
                <a className="link">Learn More</a>
            </div>
        </div>

    <div className="relative hidden border-l border-black sm:h-[350px] min-w-[450px] transition-all duration-500 md:inline lg:h-[350px] lg:w-[500px]">  {/*fix this shit */}
            {/*<Image src="/watch.webp" className='asbolute -left-[100px]' />*/}
            <Image src="/watch2.webp" className='relative ' fill/>
      </div>
    </section>
    </>
  )
}

export default Landing