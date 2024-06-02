import type { FC } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingHomePage: FC = () => {
    return (
        <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
            <section className='nav-padding w-full'>
                <Skeleton className='h-[274px] w-full rounded-lg bg-black-400/60' />
            </section>

            <section className='mt-6 flex w-full flex-col sm:mt-20'>
                <Skeleton className='h-10 w-56 bg-black-400/60' />
                <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
                    <Skeleton className='h-[350px] sm:h-[260px] w-[280px] sm:w-[220px] bg-black-400/60' />
                    <Skeleton className='h-[350px] sm:h-[260px] w-[280px] sm:w-[220px] bg-black-400/60' />
                    <Skeleton className='h-[350px] sm:h-[260px] w-[280px] sm:w-[220px] bg-black-400/60' />
                </div>
            </section>
        </main>
    )
}

export default LoadingHomePage
