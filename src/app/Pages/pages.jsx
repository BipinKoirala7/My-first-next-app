import '../app/globals.css'
import { getFeaturedEvents } from '../Dummy_data'
import EventList from '@/components/events/event-list'

export default function HomePage() {
    const featuredEvents = getFeaturedEvents()
    console.log(featuredEvents)

    return (
        <div className='flex flex-col gap-12 bg-green-100 items-center justify-center w-screen h-screen'>
            <EventList items={featuredEvents} />
        </div>
    )
}