import { useSelector } from "react-redux";

function Transactions() {
  const { tranArray } = useSelector((store) => store.transactions);
  return (
    <div>
      <table className="w-full text-center">
        <thead>
          <tr className="py-1 rounded-t-lg text-sm bg-accent1sh1 text-contPrimary border-y-2  border-accent1sh1">
            <th>تاریخ</th>
            <th>پلن</th>
            <th>تاریخ اعتبار</th>
            <th>مبلغ</th>
          </tr>
        </thead>
        <tbody>
          {tranArray.map((tr, i) => (
            <tr
              key={i}
              className="bg-teal-50 even:bg-teal-100 border-b-teal-200 py-1"
            >
              <td>
                {tr.persianDate.toString()?.slice(0, 4)}/
                {tr.persianDate.toString()?.slice(4, 6)}/
                {tr.persianDate.toString()?.slice(6, 8)}
              </td>
              <td>{tr.details}</td>
              <td>
                {tr.subscribeDate.toString()?.slice(0, 4)}/
                {tr.subscribeDate.toString()?.slice(4, 6)}/
                {tr.subscribeDate.toString()?.slice(6, 8)}
              </td>
              <td>{tr.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
