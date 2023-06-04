import EventStyle from "./eventStyle"

export default function EventList(props){
    const { items } = props
    const list = items.map(item => <EventStyle event={item} key={item.id} />)
    return (
        <>
            {list}
        </>
    )
}