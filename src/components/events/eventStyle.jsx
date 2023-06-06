import Button from "../ui/Button";

export default function EventStyle(props) {
  const { title, description, image, location, date, id } = props.event
  console.log(id)
    const readbaleDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year:'numeric'
    })
  const readableAddress = location.replace(', ', '\n')

    return (
      <div className="flex gap-2 bg-white rounded-xl w-[40rem] items-center">
        <img src={`../../${image}`} alt="" className="w-80 rounded-xl" />
        <div className="flex flex-col gap-2 px-4 py-4">
          <h1 className="text-[1.5rem]">{title}</h1>
          <section className="flex gap-4 flex-col">
            <time className="font-bold">{readbaleDate}</time>
            <address>{readableAddress}</address>
            <Button id={id}>
              Explore Event
            </Button>
          </section>
        </div>
      </div>
    );
}