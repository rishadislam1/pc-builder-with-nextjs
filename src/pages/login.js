import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center md:mt-20">
            <button   onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            } className="btn btn-neutral">SignIn With Github</button>
            <button onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
            className="btn btn-active btn-primary mt-10">SignIn With Google</button>
        </div>
    );
};

export default Login;