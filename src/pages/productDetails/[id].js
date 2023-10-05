import { useRouter } from 'next/router';


const productDetails = ({allComponents}) => {
    console.log(allComponents)
    return (
        <div>
           
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

    const {params} = context;
    const res = await fetch(`http://localhost:3000/api/allComponents/${params.id}`); 
  
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