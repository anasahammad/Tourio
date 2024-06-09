import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const ReviewsSection = ({guideEmail}) => {
	const [rating, setRating] = useState(0)
	

	const {data: reviews = [], refetch} = useQuery({
		queryKey: ['reviews', guideEmail],
		queryFn: async ()=>{
			const res = await axiosSecure.get(`/reviews/${guideEmail}`)
			return res.data;
		}
	})
	
const axiosSecure = useAxiosSecure()

	const {mutateAsync} = useMutation({
			mutationFn: async (newRating)=>{
				const {data} = await axiosSecure.post('/review', newRating )
				return data;
			},
			onSuccess : ()=>{
				toast.success("Review Added successful")
			},
			onError: (error)=>{
				toast.error(error.response?.message || "An error Occured")
			}
	})

	const handleRating = (newRating)=>{
		setRating(newRating)
	}
	const handleSubmitReview =async (e) =>{
		e.preventDefault()
		const comment = e.target.comment.value;
		const newReview = {
			comment, rating, guideEmail
		}
		try{
		   await mutateAsync(newReview)
		   refetch()
		}
		catch (err){
			console.log(err)
		}
		console.log(newReview);
	}


    return (
        <div>
             <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <form 
	  onSubmit={handleSubmitReview} 
	  className="space-y-4 mb-6">
        <div>
          <StarRatings
            rating={rating}
            starRatedColor="orange"
            changeRating={handleRating}
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <textarea
	        name="comment"
            rows="4"
            placeholder="Write your review..."
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="bg-[#18877b] text-white px-4 py-2 rounded-md ">
          Submit Review
        </button>
      </form>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <StarRatings
              rating={review.rating}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="2px"
            />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default ReviewsSection;