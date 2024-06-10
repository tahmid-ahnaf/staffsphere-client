import { Label, Modal, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PayModal = ({openModal,setOpenModal,salary, paidToEmail}) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  function onCloseModal() {
    setOpenModal(false);
    setMonth('');
    setYear('');
  }
    return (
        <div>

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
                defaultValue={salary}
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
            <Link to={`payment/${salary}/${month}/${year}/${paidToEmail}`}>
            <Button>
                Pay
              </Button>
            </Link>
            
            
          </div>
        </Modal.Body>
      </Modal>
            
        </div>
    );
};

export default PayModal;
