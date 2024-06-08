import { Table } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    return (
        <div>
        <SectionTitle heading="Payment History"></SectionTitle>
            <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Transaction ID</Table.HeadCell>
          <Table.HeadCell>Month of salary</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
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

export default PaymentHistory;