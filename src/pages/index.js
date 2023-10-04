import PcComponentsCard from "@/components/ui/PcComponentsCard";
import Head from "next/head";

const HomePage = ({allComponents}) => {
  console.log(allComponents.data)
  return (
    <div>
      <Head>
        <title>Pc Builder Home Page</title>
      </Head>
      <div className="mt-24 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10">
        {
          allComponents?.data?.map(component=><PcComponentsCard key={component._id} allComponents={component}></PcComponentsCard>)
        }
       
      </div>
    </div>
  );
};

export default HomePage;


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/pcrandom"); 

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
