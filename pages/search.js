import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../Components/InfoCard'
import MapComp from '../Components/MapComp'

const Search = ({ SearchData }) => {

    const router = useRouter()
    const { location, endDate, startDate, guest } = router.query;
    const formateStartDate = format(new Date(), "dd MMM yy");
    const formateEndDate = format(new Date(), "dd MMM yy");
    const range = `${formateStartDate}-${formateEndDate}`
    return (
        <>
            <Header placeholder={`${location} | ${range} | ${guest} guest`} />
            <main className='flex'>
                <section className='mt-6 mb-10 pl-5'>
                    <p className='text-xs'>300+ Stays {range} for {guest} of guest</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibilty</p>
                        <p className='button'>Type Places</p>
                        <p className='button'>Price</p>
                        <p className='button'> Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className="">
                        {SearchData.map(({ img, location, title, description, star, price, total, long, lat }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                                long={long}
                                lat={lat}
                            />
                        ))}
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px] 2xl:w-full'>
                    <MapComp SearchData={SearchData} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://www.jsonkeeper.com/b/5NPS`)
    const SearchData = await res.json()
    return {
        props: {
            SearchData
        }
    }
}
export default Search
