import React from 'react';

const AboutUs = () => {
    return (
        <div>
           <div className="bg-[#FDF0EA] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">About Us</h1>
                <p className="font-kaushan-script text-[#F26F73]">Short Describe abot us</p>
            </div>


            <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to Tourio
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Discover the beauty of Bangladesh with our expert tour guides.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#ed6c33] text-white">
                                    
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3-3m0 0l3 3m-3-3v12"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Mission</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                To provide exceptional tour experiences by showcasing the rich culture, history, and natural beauty of Bangladesh.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#ed6c33] text-white">
                                    
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V7a2 2 0 00-2-2H7"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Vision</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                To be the leading tour guide service in Bangladesh, known for our integrity, innovation, and commitment to excellence.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#ed6c33] text-white">
                                    
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-2 2m4-4l2 2m0 0l2-2m-2 2v13"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Values</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                We value integrity, excellence, and a deep respect for the culture and heritage of Bangladesh. We strive to provide unforgettable experiences for our clients.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#ed6c33] text-white">
                                    
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 018 0m-8 0a4 4 0 018 0m0 0v6m0 0h12a2 2 0 002-2v-6m-8 0a4 4 0 018 0m-8 0a4 4 0 018 0"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Team</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Our team consists of experienced tour guides who are passionate about sharing the beauty and culture of Bangladesh with our clients.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;