import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const sortData = (data, sortBy, sortOrder) => {
    if (sortOrder && sortBy) {
      const { sortValue, sortFunction } = config.find(
        (column) => sortBy === column.label
      );

      const sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
        const reverseOrder = sortOrder === "asc" ? 1 : -1;
        return sortFunction(valueA, valueB) * reverseOrder;
      });

      return sortedData;
    }

    return data;
  };

  let sortedData = sortData(data, sortBy, sortOrder);

  return { setSortColumn, sortedData, sortBy, sortOrder };
}

export default useSort;
