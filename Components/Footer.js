import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10  px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h3 className='font-bold'>Support</h3>
                <p>Help Center</p>
                <p>AirCover</p>
                <p>Supporting people with disabilities</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Report a neighborhood concern</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h3 className='font-bold'>Community</h3>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Combating discrimination</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h3 className='font-bold'>Hosting</h3>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h3 className='font-bold'>Airbnb</h3>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Gift cards</p>
            </div>
        </div>
    )
}

export default Footer
