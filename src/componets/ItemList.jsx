import Item from "./Item";
import campera from "./imagenes/campera.jpg";
import pantalon from "./imagenes/pantalon.jpg";

const ItemList = () => {
  const items = [
    {
      id: 1,
      title: "Campera",
      description: "Para el Invierno",
      price: 3000,
      pictureUrl: campera,
      stock: 5,
    },
    {
      id: 2,
      title: "Pantalon",
      description: "Color marrón",
      price: 3222,
      pictureUrl: pantalon,
      stock: 10,
    },
  ];
  return (
    <>
      {items.map((item) => {
        return (
          <Item
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
            stock={item.stock}
          />
        );
      })}
    </>
  );
};

export default ItemList;
