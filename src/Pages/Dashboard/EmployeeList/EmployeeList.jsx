import { Table } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "flowbite-react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useState } from "react";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";

const EmployeeList = () => {

    const [openModal, setOpenModal] = useState(false);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setMonth('');
    setYear('');
  }

    const handlePayModal = () =>{

        setOpenModal(true);




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
                <Button onClick={handlePayModal}>
                  Pay
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Table.Cell>
              <Table.Cell>
              <Button>
                  Details
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Payment Details</h3>
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="salary" value="Salary" />
              </div>
              <TextInput
                id="salary"
                defaultValue={"25000"}
                required
                disabled
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="month" value="Salary Month" />
              </div>
              <TextInput
                id="month"
                placeholder="Name of month"
                value={month}
                onChange={(event) => setMonth(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="year" value="Salary Year" />
              </div>
              <TextInput
                id="Year"
                placeholder="Year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                required
              />
            </div>

            <Button onClick={() => setOpenModal(false)}>
                Pay
              </Button>
            
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeeList;
