import { Button, Card, Table , Label, TextInput,Select, Datepicker  } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Worksheet = () => {

    return (
        <div className="">
        <SectionTitle heading="Work Sheet"></SectionTitle>
            <Card className="mb-8">
      <form className="flex items-center gap-4">
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select task" />
      </div>
      <Select id="countries" required>
        <option>Sales</option>
        <option>Support</option>
        <option>Content</option>
        <option>Paper Work</option>
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
          <Datepicker title="Pick a Date" />
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
          </Table.Row>
        
        </Table.Body>
      </Table>
    </div>
        </div>
    );
};

export default Worksheet;