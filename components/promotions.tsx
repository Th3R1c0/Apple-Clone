import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
function MyTabs() {
    const [categories] = useState({
        promotions: [
            {
                id: 1, 
                title: 'Apple Watch 2022',
                price: '$20,000 USD',
                img: 'watch.webp'
            },
            {
                id: 2, 
                title: 'Apple Watch 2022 ',
                price: '$50,000 USD',
                img: 'watch2.webp'
            },
            {
                id: 2, 
                title: 'Apple Watch 2022',
                price: '$20,000 USD',
                img: 'watch3.webp'
            }
        ],
        iphone: [
            {
                id: 1, 
                title: 'iphone 14 pro max',
                price: '$20,000 USD',
                img: `iphone1.webp`
            },
            {
                id: 2, 
                title: 'iphone 13 pro max',
                price: '$50,000 USD',
                img: `iphone2.webp`
            },
            {
                id: 2, 
                title: 'iphone 12 pro max',
                price: '$20,000 USD',
                img: `iphone3.png`
            }
        ],
        ipad: [
            {
                id: 1, 
                title: 'ipad 2022',
                price: '$20,000 USD',
                img: 'ipad1.webp'
            },
            {
                id: 2, 
                title: 'ipad 2020',
                price: '$50,000 USD',
                img: 'ipad2.webp'
            },
            {
                id: 2, 
                title: 'ipad 2019',
                price: '$20,000 USD',
                img: 'ipad3.webp'
            }
        ]
    })
    return (
        <div className='w-full h-full'>
      <Tab.Group>
        <Tab.List className='w-full h-max p-4 flex justify-center'>
            <div className='flex'>
            {Object.keys(categories).map(category => {
                return (
                    <Tab className=" from-pink-500 to-violet-500 rounded-t-2xl ui-selected:bg-gradient-to-r pb-2 text-3xl border-black ring-none ring-opacity-none ring-offset-0 ring-offset-blue-400 focus:outline-none focus:ring-0"
                    key={category}>
                        <div className='p-6 ui-selected:bg-[#35383C] rounded-t-xl'>
                            {category}
                        </div>
                    </Tab>

                )
            })}
            </div>
        </Tab.List>
        <Tab.Panels>
            {Object.values(categories).map((category, idx) => (
                <Tab.Panel key={idx} className='md:flex p-4 md:space-x-4 md:space-y-0 space-y-4 '>
                    {category.map(product => (
                        <div key={product.id} className='md:w-1/3 h-max bg-[#35383C] p-8 flex flex-col items-center rounded-md'>
                            <Image alt='' src={`/${product.img}`} width={400} height={500}/>
                            <div className='flex justify-between w-full items-center'>
                                <div className='flex flex-col'>
                                    <h1 className='tracking-wide text-4xl font-semibold'>{product.title}</h1>
                                    <p className='tracking-wide text-2xl '>{product.price}</p>
                                </div>
                                <div className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]">
                                <ShoppingBagIcon className="w-6 h-6" />
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
      </div>
    )
  }

function Promotions() {
  return (
    <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B] text-white p-4'>
    <h1 className='text-center text-4xl p-12 font-medium tracking-wide md:text-5xl'>New Promos</h1>
    <MyTabs />
  </section>
  )
}

export default Promotions