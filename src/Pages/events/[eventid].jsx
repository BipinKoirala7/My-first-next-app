import { useRouter } from "next/router"

export default function eventsList() {

    const router = useRouter()
    console.log(router)
    return (
        <div>THis ia where the evets will be holding its state</div>
    )
}