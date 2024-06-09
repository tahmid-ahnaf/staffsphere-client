import { Button, Card, Table , Label, TextInput,Select, Datepicker  } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTask from "../../../hooks/useTask";

const Worksheet = () => {
  const { user } = useAuth();
  const [tasks, refetch] = useTask();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const taskName = e.target.tasks.value;
    const hoursWorked = e.target.hoursWorked.value;
    const date = e.target.date.value;

    console.log(taskName,hoursWorked,date);

    const taskItem = {
      taskName: taskName,
      email: user.email,
      hoursWorked: hoursWorked,
      date: new Date(date),
  }
  axiosSecure.post('/tasks', taskItem)
      .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
              Swal.fire({
                  icon: "success",
                  title: `Task added to database`,
                  showConfirmButton: false,
                  timer: 1500
              });
              // refetch cart to update the cart items count
              refetch();
          }

      })
    
  }

    return (
        <div className="">
        <SectionTitle heading="Work Sheet"></SectionTitle>
            <Card className="mb-8">
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <div>
      <div className="mb-2 block">
        <Label htmlFor="tasks" value="Select task" />
      </div>
      <Select id="tasks" required>
        <option value="Sales" >Sales</option>
        <option value="Support">Support</option>
        <option value="Content">Content</option>
        <option value="Paper Work">Paper Work</option>
      </Select>
    </div>

    <div>
          <div className="mb-2 block">
            <Label htmlFor="hoursWorked" value="Hours Worked" />
          </div>
          <TextInput id="hoursWorked" type="number" placeholder="Hours Worked" required />
        </div>
    <div>
    <div className="mb-2 block">
            <Label htmlFor="date" value="Date" />
          </div>
          <Datepicker id="date" title="Pick a Date" />
    </div>
        
        <div>
        <div className="mb-2 block">
            <Label htmlFor="add" value="Add the task" />
          </div>
          <Button type="submit">Submit</Button>
        </div>
        
      </form>
    </Card>

    <div className="overflow-x-auto">
    
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Task</Table.HeadCell>
          <Table.HeadCell>Hours Worked</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {
          tasks.map((task)=>(
            <Table.Row key={task._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {task.taskName}
            </Table.Cell>
            <Table.Cell>{task.hoursWorked}</Table.Cell>
            <Table.Cell>{task.date.split("T")[0]}</Table.Cell>
          </Table.Row>
          ))
        }
          
        
        </Table.Body>
      </Table>
    </div>
        </div>
    );
};

export default Worksheet;