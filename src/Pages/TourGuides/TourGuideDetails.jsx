import { RiLayoutGrid2Fill } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";

const TourGuideDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="container mx-auto font-dm-sans">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center font-bold gap-2 my-10"
      >
        <RiLayoutGrid2Fill />
        <h1>Back to guides list</h1>
      </div>

      <div className=" px-4 py-6 border flex flex-col md:flex-row justify-between">
        <div className=" md:w-2/3 md:border-r">
            <div>
                <h1 className="font-dm-sans text-2xl md:text-3xl font-bold">{user?.name}</h1>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                    <h4 className="font-semibold">Hobbies</h4>
                    <p>{user?.hobby}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Languages</h4>
                    <p>{user?.language}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Telephone</h4>
                    <p>{user?.number}</p>
                </div>
                <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p>{user?.email}</p>
                </div>
            </div>

            <hr />

            <div className="my-6 md:my-12 ">
                <h1 className="text-2xl md:text-3xl font-bold">About {user?.name}</h1>

                <p className="mt-4 text-justify">{user?.about}</p>
            </div>
        </div>
            <div className="md:px-6 ">
                <div className="border-b">
                    <img src={user?.photo} className="w-[300px]" alt="" />
                </div>

                <div className="py-6 md:py-16 border-b ">
                    <h1 className="text-2xl font-bold">Official Guide Identity</h1>
                </div>

                <div className="py-6 md:py-16 ">
                    <h1 className="text-2xl font-bold">Contact this tourist-guide</h1>

                    <div className="card shrink-0  ">
      <form className="card-body">
        <div className="form-control">
         
          <input name="firstName"  type="text" placeholder="First name*" className="input rounded-none  focus:outline-none bg-[#ECEEEF]" required />
        </div>
        <div className="form-control">
         
          <input name="lastName"  type="text" placeholder="Last name*" className="input rounded-none  focus:outline-none bg-[#ECEEEF]" required />
        </div>
        <div className="form-control">
         
          <input name="email"  type="email" placeholder="Email address*" className="input rounded-none  focus:outline-none bg-[#ECEEEF]" required />
        </div>
        <div className="form-control">
         
          <input name="telephone"  type="tel" placeholder="Telephone*" className="input rounded-none  focus:outline-none bg-[#ECEEEF]" required />
        </div>
        <div className="form-control">
         
          <textarea name="telephone" rows={4}  type="tel" placeholder="Please enter your message*" className="textarea rounded-none  focus:outline-none bg-[#ECEEEF]" required />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default TourGuideDetails;
