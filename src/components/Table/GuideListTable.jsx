import { useQuery } from "@tanstack/react-query";
import useAxiosPub from "../../hooks/useAxiosPub";
import { Link } from "react-router-dom";


const GuideListTable = () => {
  const axiosPublic = useAxiosPub()
  const {data: guides = [], isLoading} = useQuery({
    queryKey: ['guides'],
    queryFn: async ()=>{
      const res = await axiosPublic.get('/tour-guides')
      return res.data;
    }
  })
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                SI
              </th>
              <th>Photo</th>
              <th>Name</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              guides.map((guide, idx)=> <tr key={idx}>
              <th>
               {idx + 1}
              </th>
              
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={guide?.photo} />
                    </div>
                  </div>
                  
                </div>
              
              <td>
                {guide?.name}
               
              </td>
             
              <th>
                <Link to={`/guide-details/${guide.email}`} className="btn btn-ghost btn-xs">details</Link>
              </th>
            </tr>)
            }
           
           
          
           
           
          </tbody>
         
          
        </table>
      </div>
    );
};

export default GuideListTable;