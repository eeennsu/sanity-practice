'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { formUrlQuery } from '@/sanity/utils'
import { useDebouncedValue } from '@/lib/hooks/useDebouncedValue'

const SearchForm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [search, setSearch] = useState<string>('')
    const { debouncedValue } = useDebouncedValue<string>(search)

    useEffect(() => {
        let newUrl = ''

        if (debouncedValue && debouncedValue.length > 0) {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'query',
                value: debouncedValue,
            })
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['query'],
            })
        }

        router.push(newUrl, { scroll: false })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-smt-10 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src='/magnifying-glass.svg'
                    className='absolute left-8'
                    width={32}
                    height={32}
                    alt='Search icon'
                />
                <Input
                    className='base-regular placeholder:text-opacity-35 h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
                    type='text'
                    placeholder='Search resources...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </form>
    )
}

export default SearchForm
