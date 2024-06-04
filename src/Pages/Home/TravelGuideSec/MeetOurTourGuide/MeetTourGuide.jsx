import { useQuery } from "@tanstack/react-query";
import useAxiosPub from "../../../../hooks/useAxiosPub";
import { Link } from "react-router-dom";


const MeetTourGuide = () => {
    const axiosPublic = useAxiosPub()
    const {data: guides = [], isLoading} = useQuery({
      queryKey: ['guides'],
      queryFn: async ()=>{
        const res = await axiosPublic.get('/tour-guides')
        return res.data;
      }
    })
    return (
        <div className="my-6">
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="font-semibold text-[#017b6e]">
        <th className="border px-4 py-2 ">Guide</th>
        <th className="border px-4 py-2">Name</th>
        <th className="border px-4 py-2">Languages</th>
        <th className="border px-4 py-2">Telephone</th>
        <th className="border px-4 py-2">Email</th>
        <th className="border px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        guides?.map(guide=> <tr key={guide._id}>
            <td className="border px-4 py-2">
             
                <div className="avatar">
                  <div className="mask w-14 h-14">
                    <img src={guide?.photo} alt={guide?.name} />
                  </div>
               
              </div>
            </td>
            <td className="border px-4 py-2">{guide?.name}</td>
            <td className="border px-4 py-2">{guide?.
language}</td>
            <td className="border px-4 py-2">{guide?.number}</td>
            <td className="border px-4 py-2">{guide?.email}</td>
            <td className="border px-4 py-2">
             <Link to={`/guide-details/${guide.email}`}>
             <button className="btn btn-ghost text-[#017b6e] btn-xs">details</button>
             </Link>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MeetTourGuide;