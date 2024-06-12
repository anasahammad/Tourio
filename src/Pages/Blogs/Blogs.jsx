import React, { useEffect, useState } from 'react';

const Blogs = () => {
        const [blogs, setBlogs] = useState([])

        useEffect(()=>{
            fetch('./blogs.json')
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setBlogs(data);
            });
        }, [])
    console.log(blogs);
    return (
        <div>
            <div className="bg-[#FDF0EA] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">All Blogs </h1>
                <p className="font-kaushan-script text-[#F26F73]">Read Our Blogs</p>
            </div>
            <section className="">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={blogs[1]?.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline hover:text-[#017b6e]">{blogs[1]?.title}</h3>
				<span className="text-xs dark:text-gray-600">{blogs[1]?.date}</span>
				<p>{blogs[1]?.description}</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {
                blogs?.map(blog=> <a key={blog.title} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-xl">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog?.image} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline hover:text-[#017b6e]">{blog?.title}</h3>
                        <span className="text-xs ">{blog?.date}</span>
                        <p>{blog?.description}</p>
                    </div>
                </a>)
            }
			
		
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-[#ed6c33] text-white">Load more posts...</button>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blogs;