import {GiStairsGoal} from 'react-icons/gi'

const Objectives = () => {
  return (
    <div className="flex justify-center xxs:mt-6 md:mt-14 xxs:px-4 md:px-0">
        <div className="p-4 bg-slate-200 md:w-[50vw] rounded-lg shadow-xl z-[10] hover:scale-105 ease-in duration-200 ">
            <div className="flex justify-center font-bold xxs:text-xl md:text-4xl">
                <GiStairsGoal className='mr-2' />
                Our Objectives</div>
            <div>
                <ul className="leading-10 md:text-lg md:p-2 list-disc list-inside">
                    <li className="md:py-2">To create a sense of humor in the society</li>
                    <li className="md:py-2">To reach out to needy children in various children homes</li>
                    <li className="md:py-2">Create awareness that disability is not inability</li>
                    <li className="md:py-2">Organize and carry out charity work across the nation</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Objectives