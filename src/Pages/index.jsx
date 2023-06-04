import '../app/globals.css'
import { getFeaturedEvents } from '../Dummy_data'
import EventList from '@/components/events/event-list'

export default function HomePage() {
    const featuredEvents = getFeaturedEvents()
    console.log(featuredEvents)

    return (
        <div className='flex flex-col gap-2 px-4 py-4'>
            <EventList items={featuredEvents} />
        </div>
    )
}