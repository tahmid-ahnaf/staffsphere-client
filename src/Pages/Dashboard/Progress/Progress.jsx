import { Button, Card, Table , Label, TextInput,Select, Datepicker  } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllTask from "../../../hooks/useAllTask";

const Progress = () => {
    const [alltask, refetch] = useAllTask();
    return (
        <div>
        <SectionTitle heading="Progress"></SectionTitle>
            <div className="overflow-x-auto">
    
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Task</Table.HeadCell>
        <Table.HeadCell>Task Done By</Table.HeadCell>
        <Table.HeadCell>Hours Worked</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
      {
        alltask.map((task)=>(
          <Table.Row key={task._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {task.taskName}
          </Table.Cell>
          <Table.Cell>{task.email}</Table.Cell>
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

export default Progress;