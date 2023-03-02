import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const { cars, carName } = useSelector((state) => {
    const { cars, searchTerm } = state.cars;
    const searchTermLower = searchTerm.toLowerCase();
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTermLower)
    );
    return {
      cars: filteredCars,
      carName: state.form.name,
    };
  });

  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold =
      carName && car.name.toLowerCase().includes(carName.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
