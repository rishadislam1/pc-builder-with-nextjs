import Image from "next/image";

const BuildCard = ({allComponents}) => {
  
   const {_id,img, ProductName, Category, Price, Status, Reviews} = allComponents;

   const rat = Reviews.map(rev=> {return rev.Rating})

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
        <Image
        src={img}
        width={500}
        height={200}
        responsive="true"
        alt="PC image"
        className="w-full md:h-[300px]"
      />
           </figure>
        <div className="card-body">
          <h2 className="card-title">{ ProductName }</h2>
          <p>Category: {Category}</p>
          <p>Price: {Price}</p>
          <p>Status: {Status}</p>
          <p>Rating: {rat}</p>
      
    
        </div>
      </div>
    );
};

export default BuildCard;