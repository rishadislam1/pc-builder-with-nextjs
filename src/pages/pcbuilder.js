import BuildCard from "@/components/ui/BuildCard";
import { useSession } from "next-auth/react";
import Link from "next/link";
const pcbuilder = ({ cpuComponents }) => {
  let cpu = {};
  let monitor = {};
  let motherboard = {};
  let power = {};
  let ram = {};
  let storage = {};
  const { data: session } = useSession();

  cpuComponents?.data?.map((component) => {
    if (session?.user?.email === component.userEmail) {
      if (component?.Category === "CPU / Processor") {
        cpu = component;
      }
      if (component?.Category === "Power Supply Unit") {
        power = component;
      }
    }
  });

  return (
    <div>
      <div className="mt-10 text-center text-3xl font-bold">
        Build Your Pc With Us
      </div>
      <div className="mt-10 flex flex-col gap-10 justify-center items-center">
        {/* cpu */}
        <div>
          <div className="flex items-center gap-10">
            <h1>CPU / Processor</h1>
            {cpu?._id ? (
              <div>{<BuildCard allComponents={cpu}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {cpu?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/cpu">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>

        {/* Motherboard */}
        <div>
          <div className="flex items-center gap-10">
            <h1>Motherboard</h1>
            {motherboard?._id ? (
              <div> {<BuildCard allComponents={motherboard}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {motherboard?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/motherboard">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>

        {/* Ram */}
        <div>
          <div className="flex items-center gap-10">
          <h1>Ram</h1>
            {ram?._id ? (
              <div> {<BuildCard allComponents={ram}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {ram?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/ram">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>

        {/* power supply */}
        <div>
          <div className="flex items-center gap-10">
          <h1>Power Supply</h1>
            {power?._id ? (
              <div> {<BuildCard allComponents={power}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {power?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/power">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>

        {/* storage device */}
        <div>
          <div className="flex items-center gap-10">
          <h1>Storage Device</h1>
            {storage?._id ? (
              <div> {<BuildCard allComponents={storage}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {storage?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/storage">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>

        {/* monitor */}

        <div>
          <div className="flex items-center gap-10">
          <h1>Monitor</h1>
            {monitor?._id ? (
              <div> {<BuildCard allComponents={monitor}></BuildCard>}</div>
            ) : (
              "choose product"
            )}

            <div>
              {monitor?._id ? (
                <button className="btn btn-primary" disabled>
                  Choose
                </button>
              ) : (
                <Link href="/buildpc/monitor">
                  <button className="btn btn-primary">Choose</button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 mt-5 border-gray-300 w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 mb-10">
        <button className="btn btn-accent text-center">Build</button>
      </div>
    </div>
  );
};

export default pcbuilder;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getUserPcBuild");
  const data = await res.json();

  return {
    props: {
      cpuComponents: data,
    },
  };
};
