import { useRouter } from "next/router"

export default function EventsPage() {
    const router = useRouter()
    console.log(router)
    return (
        <div>This is an events Page</div>
    )
}