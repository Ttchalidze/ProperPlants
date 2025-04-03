import Plant from "./plant";
export default function Plants({ plants, addToCart }) {
  return (
    <section className="Plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={{ addToCart }} />
        ))}
      </ul>
    </section>
  );
}
