'use client'

import { formUrlQuery } from '@/sanity/utils'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { resourceCategory } from '@/sanity/schemaTypes/resource.schema'

const links = ['all', ...resourceCategory]

const Filters = () => {
    const [active, setActive] = useState('')
    const searchParms = useSearchParams()
    const router = useRouter()

    const handleFilter = (link: string) => {
        let newUrl: string = ''

        if (active === link) {
            setActive('')

            newUrl = formUrlQuery({
                params: String(searchParms),
                keysToRemove: ['category'],
            })
        } else {
            setActive(link)

            newUrl = formUrlQuery({
                params: String(searchParms),
                key: 'category',
                value: link.toLowerCase(),
            })
        }

        router.push(newUrl, { scroll: false })
    }

    return (
        <section className='text-white-800 body-text no-scrollbar flex w-full gap-2 overflow-auto py-12  justify-center'>
            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => handleFilter(link as string)}
                    className={`${
                        active === link || (link === 'all' && active === '')
                            ? 'gradient_blue-purple'
                            : 'hover:opacity-70'
                    } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize `}
                >
                    {link}
                </button>
            ))}
        </section>
    )
}

export default Filters
