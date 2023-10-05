import PcAddCard from '@/components/ui/PcAddCard';
import PcComponentsCard from '@/components/ui/PcComponentsCard';
import Head from 'next/head';
import React from 'react';

const ram = ({cpuComponents}) => {
  
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

export default ram;


  export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/ramApi");
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        cpuComponents: data,
      }
    };
  };
    