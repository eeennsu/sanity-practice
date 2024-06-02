import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
    id: string
    title: string
    image: string
    downloadNumber: number
    downloadLink: string
}

const ResourceCard = ({
    id,
    title,
    image,
    downloadNumber,
    downloadLink,
}: Props) => {
    return (
        <Card className='w-full max-w-[280px] sm:max-w-[220px] border-0 !bg-transparent group overflow-hidden'>
            <Link href={downloadLink} target='_blank'>
                <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
                    <figure className='w-full max-w-[280px] sm:max-w-[220px] h-[350px] sm:h-[260px] relative overflow-hidden rounded-md'>
                        <Image
                            src={image}
                            className='h-full rounded-md object-cover group-hover:scale-110 transition-all duration-300'
                            fill
                            alt={title}
                        />
                    </figure>
                    <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left '>
                        {title}
                    </CardTitle>
                </CardHeader>
            </Link>
            <CardContent className='flex-between mt-4 p-0'>
                <figure className='flex-center body-medium gap-1.5 text-white'>
                    <Image
                        src='/downloads.svg'
                        width={20}
                        height={20}
                        alt='download'
                    />
                    {downloadNumber}
                </figure>
                <Link
                    href={downloadLink}
                    target='_blank'
                    className='flex-center text-gradient_purple-blue body-semibold gap-1.5'
                >
                    Download Now
                    <Image
                        src='/arrow-blue.svg'
                        width={13}
                        height={10}
                        alt='arrow'
                    />
                </Link>
            </CardContent>
        </Card>
    )
}

export default ResourceCard
