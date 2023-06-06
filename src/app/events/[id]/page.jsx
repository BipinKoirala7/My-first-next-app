import { getEventById } from "@/Dummy_data"

export default function Event({ params }) {
    console.log(params)
    const event = getEventById(params.id)
    console.log(event)
    const readbaleDate =event && new Date(event.date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const readableAddress =event && event.location.replace(", ", "\n");
    return (
        <div className="max-h-screen h-screen  max-w-screen w-[100%] flex flex-col relative gap-64 overflow-hidden">
            <div className=" flex w-screen h-[35vh] ui-gradient pt-[3rem] justify-center">
                <p className="text-[4rem] font-bold text-white">{event && event.title}</p>
            </div>
            <div className="bg-slate-900 absolute flex gap-8 px-4 py-2 w-[50%] h-[45vh] text-white rounded-xl top-[25%] left-[50%] translate-x-[-50%] items-center">
                <img src={event && `../../../${event.image}`} alt="" className="w-[15rem] h-fit aspect-square rounded-[50%] border-2 border-white" />
                <div className="flex flex-col px-4 py-4 gap-4 ">
                    <time>{readbaleDate}</time>
                    <address>{readableAddress}</address>
                </div>
            </div>
            <p className="w-[50%]  mx-auto text-[1.2rem]">{event && event.description}</p>
        </div>
    )
}