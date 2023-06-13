import Card, { CourseCard } from "./Card";


const CardContainer = () => {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 mx-4">
          <Card
            icon="ICON/book.png"
            title="1500+ Topic"
            description="Learn Anything"
          />
          <Card
            icon="ICON/Student.png"
            title="1800+ Students"
            description="Learn Anything"
          />
          <Card
            icon="ICON/Test.png"
            title="9K+ Test Token"
            description="Learn Anything"
          />
          <Card
            icon="ICON/Students.png"
            title="2000+ Students"
            description="Learn Anything"
          />
        </div>
      </div>
    );
  };

  export default CardContainer;



 

export  const CardContainer2 = () => {
  return (
    <div className="container mx-auto">
      <div >
        <div className="text-center">
          <h1 className="text-4xl  lg:text-5xl font-medium mb-4 leading-tight">ONLINE COURSE</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 py-5 mx-4">
        <CourseCard
          icon="./Photos/Morder pyschology.png"
          title="Modern Psychology"
          description="Designation"
          seats='50'
          startDate="25 June 2023"
        />
        <CourseCard
          icon="./Photos/Morder psyc.png"
          title="Modern psyc"
          description="Designation"
          seats='56'
          startDate="25 June 2023"
        />
        <CourseCard
          icon="./Photos/Morder pychons.png"
          title="Morder pychons"
          description="Designation"
          seats='80'
          startDate="25 June 2023"
        />
      </div>
    </div>
  );
};


