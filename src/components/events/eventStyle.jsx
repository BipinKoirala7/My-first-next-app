export default function EventStyle(props) {
    const { title, description, image, location, date } = props.event
    const readbaleDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year:'numeric'
    })

    const readableAddress = location.replace(', ', '\n')
    return (
        <div className="flex flex-col gap-2 px-4 pt-4 border-[1px] border-slate-600  ">
            <h1 className="text-[2rem]">{title}</h1>
            <img src={image} alt="" className="w-80 rounded-xl" />
            <section className="flex gap-4">
                <time>{readbaleDate}</time>
                <address>{readableAddress}</address>
            </section>
            <p className="text-slate-500">{description}</p>
        </div>
    )
}