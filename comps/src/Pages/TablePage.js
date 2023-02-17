import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-300", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];

const config = [
  {
    label: "Name",
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
    sortFunction: (a, b) => a.localeCompare(b),
  },
  {
    label: "Color",
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
    sortFunction: (a, b) => a - b,
  },
];

function TablePage() {
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;
