

const StoryForm = ({handleStory}) => {

    return (
        <div>
            <div className="p-6 ">
        <h3 className="text-lg font-semibold mb-4">Add a Story</h3>
        <form onSubmit={handleStory}>
          <textarea
            
           name="story"
            placeholder="Write your story here..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
          ></textarea>
          <button type="submit" className="bg-[#017b6e] text-white px-4 py-2 rounded ">
            Add Story
          </button>
        </form>
      </div>
        </div>
    );
};

export default StoryForm;