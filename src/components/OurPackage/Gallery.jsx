

const Gallery = ({item}) => {
    return (
        <div>
           <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={item.packageImages
[0]} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item.packageImages
[1]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item.packageImages
[2]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item.packageImages
[3]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item.packageImages[4] ?item.packageImages[4] : "https://source.unsplash.com/random/200x200/?3" }/>
		
	</div>
</section> 
        </div>
    );
};

export default Gallery;