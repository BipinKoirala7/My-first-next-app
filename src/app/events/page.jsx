import { getAllEvents } from "@/Dummy_data"
import EventList from "@/components/events/event-list"

export default function EventsPage() {
    const events = getAllEvents()

    return (
        <div className="flex flex-col gap-12 w-[100%] items-center justify-center">
            <EventList items={events} />
        </div>
    )
}