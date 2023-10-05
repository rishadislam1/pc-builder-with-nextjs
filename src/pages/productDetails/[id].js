import Image from "next/image";
import { useRouter } from "next/router";

const productDetails = ({ allComponents }) => {
  const {
    img,
    ProductName,
    Category,
    Status,
    Price,
    Description,
    KeyFeatures,
    Reviews,
  } = allComponents?.data;

  let sum = 0;
  Reviews?.map(review=>{
  
  
    sum = sum + review?.Rating;

  })

  const averageReview = sum/Reviews?.length;
 
  
  return (
    <div>
      <Image
        src={img}
        width={500}
        height={200}
        responsive="true"
        alt="news image"
        className="w-full md:h-[400px]"
      />
      <div className="flex justify-between">
        <div className="md:ml-5 mt-10">
          <h1 className=" text-2xl font-bold">{ProductName}</h1>
          <p className="mt-4">Category: {Category}</p>
        </div>
        <div className="md:mr-5 mt-10">
          <h3 className="text-xl font-semibold">Status: {Status}</h3>
          <h1 className="text-xl font-semibold mt-4 text-yellow-600">Average Rating: {averageReview}</h1>
          <h1 className="text-2xl font-bold mt-4">Price: {Price}</h1>
        </div>
      </div>

      <div className="mt-7 md:ml-3">
        <p className="mb-4">
          <b>Product Description</b>
        </p>
        {Description}
      </div>
      <div className="mt-7 md:ml-3">
        <p className="mb-4">
          <b>
            <u>Key Features:</u>
          </b>
        </p>

        <div className="md:ml-10">
          <ul className="list-disc">
            <li> Brand: {KeyFeatures?.Brand} </li>
            <li> Model: {KeyFeatures?.Model} </li>
            <li>
              {" "}
              Specification/Capacity/Resolution: {
                KeyFeatures?.Specification
              }{" "}
            </li>
            <li>
              {" "}
              Socket/Type/Wattage/Interface/Refresh Rate: {
                KeyFeatures?.Socket
              }{" "}
            </li>
            <li>
              {" "}
              TDP/CAS Latency/Ram Slot/Efficiency/Read/Write Speed/Pannel Type:{" "}
              {KeyFeatures?.TDP}{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 md:ml-5">
        <p className="mb-4">
          <b>
            <u>Reviews:</u>
          </b>
        </p>

        <div className="my-7">
          {Reviews?.map((review) => (
            <>
              <div className=" flex items-center gap-5 mt-5">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-xs text-white">{review.User.split('')[0]}</span>
                  </div>
                </div>

                <div>
                    <span>{review.User}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{review.Comment}&nbsp;&nbsp;</span>
                    <span className="text-semibold text-yellow-600">({review.Rating})</span>
                    </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/allComponents");
  const components = await res.json();

  const paths = components?.data?.map((component) => ({
    params: { id: component._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/allComponents/${params.id}`
  );

  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allComponents: data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};
