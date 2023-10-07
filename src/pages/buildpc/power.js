import PcAddCard from '@/components/ui/PcAddCard';
import Head from 'next/head';
import React from 'react';

const power = ({cpuComponents}) => {
  
    return (
        <div>
      <Head>
        <title>Pc Builder CPU Components Page</title>
      </Head>
      <div className="mt-24 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10">
        {
          cpuComponents?.data?.map(component=><PcAddCard key={component._id} allComponents={component}></PcAddCard>)
        }
       
      </div>
    </div>
    );
};

export default power;
  

  export const getServerSideProps = async () => {
    const res = await fetch("https://pcbuildserver-git-main-freelancerrishad.vercel.app/powerApi");
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        cpuComponents: data,
      }
    };
  };
    
  