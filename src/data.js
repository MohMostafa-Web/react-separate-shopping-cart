import { faker } from "@faker-js/faker";

/* Create function to create object of fake data using "faker" library */
const createRandomProduct = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(640, 480, true),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    qty: 1, // default Qty
  };
}

export const productsData = Array.from({ length: 20 }).map(() => createRandomProduct());
