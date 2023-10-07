import Banner from "@/components/Layout/Banner";
import PcComponentsCard from "@/components/ui/PcComponentsCard";
import Head from "next/head";

const HomePage = ({allComponents}) => {

  return (
    <div>
      <Head>
        <title>Pc Builder Home Page</title>
      </Head>
      <div>
        <Banner></Banner>
      </div>
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
  const res = await fetch("https://pcbuildserver-git-main-freelancerrishad.vercel.app/pcrandom"); 

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
