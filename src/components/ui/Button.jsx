import Link from "next/link"

export default function Button(props) {
    const {id} = props
    return (
      <Link
        href={`/events/${id}`}
        className="px-8 text-center py-1 border-[1px] border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl"
      >
        {props.children}
      </Link>
    );
}