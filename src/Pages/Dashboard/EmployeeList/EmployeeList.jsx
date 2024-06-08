import { Table } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "flowbite-react";
import { MdOutlineDoneOutline } from "react-icons/md";

const EmployeeList = () => {
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
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Ahnaf Tahmid'}
              </Table.Cell>
              <Table.Cell>atahmid928@gmail.com</Table.Cell>
              <Table.Cell>
                <Button color="success">
                  <MdOutlineDoneOutline className="h-5 w-5" />
                </Button>
                {/* <Button color="failure">
                  <ImCross className="h-5 w-5" />
                </Button> */}
              </Table.Cell>
              <Table.Cell>2019817787</Table.Cell>
              <Table.Cell>25000</Table.Cell>
              <Table.Cell>
                <Button>
                  Pay
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Table.Cell>
              <Table.Cell>Completed</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EmployeeList;
