import Head from "next/head";

const HomePage = ({allComponents}) => {
  return (
    <div>
      <Head>
        <title>Pc Builder Home Page</title>
      </Head>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/pc"); 

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
