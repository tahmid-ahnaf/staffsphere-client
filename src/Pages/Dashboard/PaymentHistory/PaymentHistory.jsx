import { Table } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [paymentHistory, refetch] = usePaymentHistory();
    return (
        <div>
        <SectionTitle heading="Payment History"></SectionTitle>
            <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Transaction ID</Table.HeadCell>
          <Table.HeadCell>Month of salary</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Paid By</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {
          paymentHistory.map((payment)=>(
            <Table.Row key={payment._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {payment.transactionId}
            </Table.Cell>
            <Table.Cell>{payment.month}</Table.Cell>
            <Table.Cell>{payment.salary}</Table.Cell>
            <Table.Cell>{payment.paidBy}</Table.Cell>
          </Table.Row>
          ))
        }
          
        </Table.Body>
      </Table>
    </div>
        </div>
    );
};

export default PaymentHistory;