import { Table } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "flowbite-react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useState } from "react";

import useEmployeeList from "../../../hooks/useEmployeeList";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import PayModal from "../../../components/PayModal/PayModal";
import { Link } from "react-router-dom";

const EmployeeList = () => {

    
  const [employeeList, refetch] = useEmployeeList();
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const [salary,setSalary] = useState('');
  const [paidToEmail, setPaidToEmail] = useState('');


    const handlePayModal = (email, salary) =>{

        setOpenModal(true);
        setSalary(salary);
        setPaidToEmail(email);

    }

    const toggleVerifyStatus = (name, email, status)=> {

      axiosSecure.patch(`/employees/verify?email=${email}&isVerified=${status}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${name}'s verified status is ${status} now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
  return (
    <div>
      <SectionTitle heading="Employee List"></SectionTitle>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Verified</Table.HeadCell>
            <Table.HeadCell>Bank Account</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>Pay</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
          {
            employeeList.map((employee)=>(

              <Table.Row key={employee._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {employee.name}
              </Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>
              {
                employee.verified === "true" ? <Button onClick={()=>toggleVerifyStatus(employee.name,employee.email, "false")} color="success">
                  <MdOutlineDoneOutline className="h-5 w-5" />
                </Button>:<Button onClick={()=>toggleVerifyStatus(employee.name,employee.email, "true")} color="failure">
                  <ImCross className="h-5 w-5" />
                </Button>
              }
              </Table.Cell>
              <Table.Cell>{employee.bankAccountNo}</Table.Cell>
              <Table.Cell>{employee.salary}</Table.Cell>
              <Table.Cell>
              {
                employee.verified ==="true" ? <Button onClick={()=>handlePayModal(employee.email, employee.salary)}>
                  Pay
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button> : <Button disabled>
                  Pay
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
                
              </Table.Cell>
              <Table.Cell>
              <Link to={`details/${employee.email}/${employee.name}/${employee.designation}/${encodeURIComponent(employee.photoURL)}`}>
            <Button>
                Details
              </Button>
            </Link>
              </Table.Cell>
            </Table.Row>

            ))
          }
            
          </Table.Body>
        </Table>
      </div>

      <PayModal paidToEmail={paidToEmail} salary={salary} openModal={openModal} setOpenModal={setOpenModal}></PayModal>
      
    </div>
  );
};

export default EmployeeList;
