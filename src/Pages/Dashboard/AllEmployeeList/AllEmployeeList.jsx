
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Table,Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Swal from 'sweetalert2';

const AllEmployeeList = () => {
    const handleMakeHR = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, change to HR!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://swapitright-server.vercel.app/queries/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your query has been deleted.",
                    icon: "success",
                  });
    
                //   const remaining = myQueries.filter((item) => item._id !== id);
                //   setMyQueries(remaining);
                }
              });
          }
        });
      };
      const handleFire = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, fire!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://swapitright-server.vercel.app/queries/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your query has been deleted.",
                    icon: "success",
                  });
    
                //   const remaining = myQueries.filter((item) => item._id !== id);
                //   setMyQueries(remaining);
                }
              });
          }
        });
      };
      const handleUpdateSalary = async (id) => {
        const { value: salary } = await Swal.fire({
            title: "Update the salary",
            input: "text",
            inputPlaceholder: "Updated Salary Amount",
            showCancelButton: true,
          });
          if (salary) {
            Swal.fire(`Entered email: ${salary}`);
          }
      };
    return (
        <div>
            <SectionTitle heading="All Employee List"></SectionTitle>
            <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Designation</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>Make HR</Table.HeadCell>
            <Table.HeadCell>Update Salary</Table.HeadCell>
            <Table.HeadCell>Fire</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Ahnaf Tahmid'}
              </Table.Cell>
              <Table.Cell>Marketing Executive</Table.Cell>
              <Table.Cell>Employee</Table.Cell>
              <Table.Cell>25000</Table.Cell>
              <Table.Cell>
                <Button onClick={handleMakeHR}>
                  Change Role To HR
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button color="failure">
                  <ImCross className="h-5 w-5" />
                </Button> */}
              </Table.Cell>
              
              <Table.Cell>
                <Button onClick={handleUpdateSalary}>
                  Update Salary
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button color="failure">
                  <ImCross className="h-5 w-5" />
                </Button> */}
              </Table.Cell>
              <Table.Cell>
                <Button onClick={handleFire}>
                  Fire
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
        </div>
    );
};

export default AllEmployeeList;