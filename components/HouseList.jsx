import HouseRow from "./HouseRow";
import { useState, useEffect } from "react";

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const buttonClick = () => setCounter(counter + 1);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 4,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
      },
    ]);
  };

  useEffect(() => {
    const fetchHouses = async () => {
      const res = await fetch("/api/houses");
      const houses = await res.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  return (
    <div>
      <div className="row mb-2">
        <h2 className="text-center py-4">Houses currently available for rent</h2>
        <button className="btn btn-primary" onClick={addHouse}>
          Add House
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Adress</th>
              <th scope="col">Contry</th>
              <th scope="col">Asking Price</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {houses.map((h) => (
              <HouseRow key={h.id} house={h} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseList;
