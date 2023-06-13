/* eslint-disable @next/next/no-img-element */


const Card = ({ icon, title, description }) => {
    return (
      
        <div className="card flex flex-col gap-4 items-center justify-center shadow dark:border rounded p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-gray-700">
          <img src={icon} alt="Icon" className="w-16 h-16" />
          <h5 className="card-title text-lg dark:text-white font-bold mt-4">{title}</h5>
          <p className="card-text text-gray-600 dark:text-white text-sm mt-2">{description}</p>
        </div>
      
    );
  };



export default Card;


export const CourseCard = ({ icon, title, designation, startDate, seats }) => {
  return (
    
      <div className="border rounded-lg shadow dark:bg-gray-700">
        <img src={icon} className="rounded-lg w-full p-2" alt="..." />
        <div className="px-3 md:px-8 pt-8 flex justify-between">
          <h5 className="mb-3 dark:text-white">{title}</h5>
          <div className="icon-left flex items-center">
              <img src="ICON/people.png" className="w-5 h-auto" alt="People" />
              <p className="font-normal text-sm ml-1 dark:text-white">{seats} seats</p>
            </div>
         </div>
        <div className="px-3 md:px-8 pb-8 flex justify-between mt-4">
            <div className="flex items-center">
              <img src="ICON/calendar.png" className="w-5 h-auto" alt="Calendar" />
              <p className="font-normal text-sm ml-1 dark:text-white">{startDate}</p>
            </div>
            <a href="#" className="border text-xs hover:bg-green-500  px-1 sm:px-4 rounded-xl py-1 sm:py-2 dark:text-white">Buy Course</a>
        
          </div>
      </div>
   
  );
};


