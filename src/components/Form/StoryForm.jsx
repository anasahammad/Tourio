

const StoryForm = ({handleStory, handleImage}) => {

    return (
        <div className="my-6">
             <div className=" max-w-lg mx-auto p-8 bg-[#f0d8c4] shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center font-dm-sans">Add Your Story</h2>
      <form onSubmit={handleStory} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input 
            type="text" 
           name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <input 
            type="text" 
           name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content:</label>
          <textarea 
            name="content"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <input 
            type="date" 
            name="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Images:</label>
          <input 
            type="file"
            name="image" 
            multiple={true} 
            onChange={handleImage} 
            className="mt-1 block w-full text-gray-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Destination:</label>
          <input 
            type="text" 
           name="destination" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-[#05073c] text-white font-semibold rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Add Story
        </button>
      </form>
    </div>
        </div>
    );
};

export default StoryForm;