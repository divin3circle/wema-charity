
const Items = ({Links, title}) => {
  return (
    <ul>
       <h1 className="font-semibold mb-1 md:text-2xl text-xl">{title}</h1>
       <hr className="w-[50%] mb-2" />
       {
        Links.map((link) => (
            <li key={link.name} className="text-lg md:text-xl">
                <a href={link.link} className="hover:text-green-700 hover:font-semibold hover:scale-115 ease-in duration-150 cursor-pointer leading-6">
                    {link.name}
                </a>
            </li>
        ))
       }
    </ul>
  )
}

export default Items