

const GuideListTable = () => {
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
            <tr>
              <th>
               1
              </th>
              
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
                </div>
              
              <td>
                Zemlak, Daniel and Leannon
               
              </td>
             
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 1 */}
            <tr>
              <th>
               1
              </th>
              
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
                </div>
              
              <td>
                Zemlak, Daniel and Leannon
               
              </td>
             
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          
           
           
          </tbody>
         
          
        </table>
      </div>
    );
};

export default GuideListTable;