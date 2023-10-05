import Link from 'next/link';
import React from 'react';

const pcbuilder = () => {
    return (
        <div>
            <div className='mt-10 text-center text-3xl font-bold'>Build Your Pc With Us</div>
            <div className='mt-10 flex flex-col gap-10 justify-center items-center'>
                {/* cpu */}
                <div>
                    <div className='flex items-center gap-10'>
                        <h1>CPU / Processor</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/cpu'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>

                {/* Motherboard */}
                <div>
                    <div className='flex items-center gap-10'>
                        <h1>Motherboard</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/motherboard'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>

                {/* Ram */}
                <div>
                    <div className='flex items-center gap-10'>
                        <h1>RAM</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/ram'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>
                
                {/* power supply */}
                <div>
                    <div className='flex items-center gap-10'>
                        <h1>Power Supply</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/power'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>

                {/* storage device */}
                <div>
                    <div className='flex items-center gap-10'>
                        <h1>Storage Device</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/storage'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>

                {/* monitor */}

                <div>
                    <div className='flex items-center gap-10'>
                        <h1>Monitor</h1>
                        <p>Comming</p>
                        <Link href='/buildpc/monitor'><button className='btn btn-primary'>Choose</button></Link>
                    </div>
                    <hr className='border-1 mt-5 border-gray-300 w-full'/>
                </div>

            </div>
            <div className='flex justify-center items-center mt-5 mb-10'>
            <button className='btn btn-accent text-center'>Build</button>
            </div>
        </div>
    );
};

export default pcbuilder;