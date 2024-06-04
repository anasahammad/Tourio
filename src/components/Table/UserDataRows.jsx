import { useState } from "react";
import UpdateRoleModal from "../Modal/UpdateRoleModal";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const UserDataRows = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user: loggedUser } = useAuth();
  
  

  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      )
      return data;
      
    },
    onSuccess: () => {
      refetch();
      toast.success("Role Updated");
    },
  });

  const handleModal = async (selected) => {
    if(loggedUser.email === user?.email){
      toast.error("You cannot change your role")
      setIsOpen(false);
      return
    }


    const updateRole = {
      role: selected,
      status: "verified",
    };

    try {
      await mutateAsync(updateRole);
    }
     catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={user?.photo}
              alt=""
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {user?.name}
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

          <h2 className="text-sm font-normal text-emerald-500">
            {user?.status}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {user?.role}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {user?.email}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-x-2"
        >
          <p className="px-3 py-1 text-xs cursor-pointer text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
            Update Role
          </p>
        </button>
        <UpdateRoleModal
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleModal={handleModal}
        />
      </td>
    </tr>
  );
};

export default UserDataRows;
