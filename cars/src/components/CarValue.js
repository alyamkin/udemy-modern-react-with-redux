import { useSelector } from "react-redux";

function CarValue() {
  const filteredCars = useSelector((state) => {
    const { cars, searchTerm } = state.cars;
    const searchTermLower = searchTerm.toLowerCase();

    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTermLower)
    );
  });

  const totalCost = filteredCars.reduce((total, car) => total + car.cost, 0);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
