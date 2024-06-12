import React from 'react';

const Community = () => {
    return (
        <div className="min-h-screen ">
            <div className="bg-[#FDF0EA] py-8 px-4 text-center ">
                <h1 className="text-2xl md:text-4xl font-bold font-dm-sans">Community</h1>
                <p className="font-kaushan-script text-lg text-[#F26F73] md:text-xl mt-2">A place to connect, share, and learn</p>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold ">Welcome to Tourio Community</h2>
                    <p className="mt-4 text-gray-600 text-lg">Connect with fellow travelers, share your experiences, and get advice from our community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-2 text-[#ed6c33]">Latest Posts</h2>
                        <p className="text-gray-700">Check out the latest posts from our community members.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-2 text-[#ed6c33]">Top Contributors</h2>
                        <p className="text-gray-700">See who are the most active contributors in our community.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-2 text-[#ed6c33]">Join a Discussion</h2>
                        <p className="text-gray-700">Participate in ongoing discussions and start your own.</p>
                    </div>
                </div>

                <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-[#ed6c33]">Community Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Travel Stories</h3>
                            <p className="text-gray-700">Read amazing travel stories from our community members.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Travel Tips</h3>
                            <p className="text-gray-700">Get the best travel tips and hacks shared by our experienced travelers.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Events & Meetups</h3>
                            <p className="text-gray-700">Join our events and meetups to connect with other travelers.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
                    <p className="mt-4 text-gray-600 text-lg">Sign up to become a part of our vibrant community and start contributing today!</p>
                    <button className="mt-6 bg-[#05073c] text-white py-2 px-6 rounded-full text-lg hover:bg-[#e05b65] transition-colors">
                        Sign Up Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
