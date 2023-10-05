import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session  } = useSession();
  console.log(session?.user )
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href='/'>Home</Link></li>
      <li>
          <p>Categories</p>
          <ul className="p-2">
          <li><Link href=''>CPU / Processor</Link></li>
            <li><Link href=''>Motherboard</Link></li>
            <li><Link href=''>RAM</Link></li>
            <li><Link href=''>Power Supply Units</Link></li>
            <li><Link href=''>Storage Device</Link></li>
            <li><Link href=''>Monitor</Link></li>
            <li><Link href=''>Others</Link></li>
          </ul>
        </li>
        {session?.user ? (
          <li>
            <button onClick={() => signOut()} className=''>
              Logout
            </button>
          </li>
        ) : (
          <Link
            
            href="/login"
          >
            <li>Login</li>
          </Link>
        )}
   
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost normal-case text-xl">Pc Builder Website</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link href='/'><li><summary>Home</summary></li></Link>
    <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="p-2 z-50">
            <li><Link href='/categories/cpu'>CPU / Processor</Link></li>
            <li><Link href='/categories/motherboard'>Motherboard</Link></li>
            <li><Link href='/categories/ram'>RAM</Link></li>
            <li><Link href='/categories/power'>Power Supply Units</Link></li>
            <li><Link href='/categories/storage'>Storage Device</Link></li>
            <li><Link href='/categories/monitor'>Monitor</Link></li>
            <li><Link href='/categories/other'>Others</Link></li>
          </ul>
        </details>
      </li>
      {session?.user ? (
          <li>
            <button onClick={() => signOut()} className=''>
              Logout
            </button>
          </li>
        ) : (
          <Link
            
            href="/login"
          >
            <li><summary>LogIn</summary></li>
          </Link>
        )}
    {/* <Link href='/login'><li><summary>LogIn</summary></li></Link> */}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='/pcbuilder'><button className="btn btn-primary">Pc Builder</button></Link>
  </div>
</div>
    );
};

export default Navbar;