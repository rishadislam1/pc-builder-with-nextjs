import PcComponentsCard from '@/components/ui/PcComponentsCard';
import Head from 'next/head';
import React from 'react';

const motherboard = ({cpuComponents}) => {
    return (
        <div>
      <Head>
        <title>Pc Builder CPU Components Page</title>
      </Head>
      <div className="mt-24 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10">
        {
          cpuComponents?.data?.map(component=><PcComponentsCard key={component._id} allComponents={component}></PcComponentsCard>)
        }
       
      </div>
    </div>
    );
};

export default motherboard;

export const getStaticProps = async () => {
    const res = await fetch("https://pcbuildserver-git-main-freelancerrishad.vercel.app/motherboardApi"); 
  
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        cpuComponents: data,
        // allNews: data.data, // when using internal API connected with mongoDB
      },
      revalidate: 10,
    };
  };
  