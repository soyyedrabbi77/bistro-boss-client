import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isLoading, refetch] = useMenu(); // Get menu data, loading state, and refetch function
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Perform the DELETE request
          const res = await axiosSecure.delete(`/menu/${item._id}`);

          if (res.data.deletedCount > 0) {
            // If the deletion was successful, refetch the data
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${item.name} has been deleted`,
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Item could not be deleted.",
              icon: "error",
              confirmButtonText: "Okay"
            });
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue with deleting the item.",
            icon: "error",
            confirmButtonText: "Okay"
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage All Items" subheading="Hurry up"></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center">Loading...</td>
                </tr>
              ) : (
                menu.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-right">${item.price}</td>
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white" />
                      </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
