const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    console.log('Starting database seeding...');

    const storeId = '651c6e8a637dad0d3cfc0862';
    const categoryId = '6522f016675f4450a3d704d0';

    // Create categories if they don't exist
    console.log('Creating categories...');
    const categories = await database.category.findMany();
    // @ts-ignore 
    const categoryNames = categories.map((category: { name: string }) => category.name);
    const newCategories = ['Suits', 'Shirts', 'Ties'].filter((category) => !categoryNames.includes(category));
    await database.category.createMany({
      data: newCategories.map((category) => ({ name: category, storeId, billboardId: categoryId })),
    });

    // Create sizes if they don't exist
    console.log('Creating sizes...');
    const sizes = await database.size.findMany();
    // @ts-ignore 
    const sizeValues = sizes.map((size: { value: string}) => size.value);
    const newSizes = ['Small', 'Medium', 'Large'].filter((size) => !sizeValues.includes(size));
    await database.size.createMany({
      data: newSizes.map((size) => ({ name: size, value: size, storeId })),
    });

    // Create colors if they don't exist
    console.log('Creating colors...');
    const colors = await database.color.findMany();
    // @ts-ignore 
    const colorValues = colors.map((color: { value: string}) => color.value);
    const newColors = ['Black', 'Navy', 'Gray'].filter((color) => !colorValues.includes(color));
    await database.color.createMany({
      data: newColors.map((color) => ({ name: color, value: color, storeId })),
    });

    // Create products
    console.log('Creating products...');
    const products = [
      {
        name: 'James Bond Tuxedo',
        price: 1000,
        size: { connect: { value: 'Medium' } },
        color: { connect: { value: 'Black' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Iron Man Suit',
        price: 5000,
        size: { connect: { value: 'Large' } },
        color: { connect: { value: 'Red' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Joker Suit',
        price: 750,
        size: { connect: { value: 'Small' } },
        color: { connect: { value: 'Purple' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Neo Suit',
        price: 900,
        size: { connect: { value: 'Medium' } },
        color: { connect: { value: 'Black' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Patrick Bateman Suit',
        price: 800,
        size: { connect: { value: 'Large' } },
        color: { connect: { value: 'Gray' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Harvey Specter Suit',
        price: 1200,
        size: { connect: { value: 'Medium' } },
        color: { connect: { value: 'Navy' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Don Draper Suit',
        price: 1100,
        size: { connect: { value: 'Large' } },
        color: { connect: { value: 'Gray' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
      {
        name: 'Tyler Durden Jacket',
        price: 600,
        size: { connect: { value: 'Medium' } },
        color: { connect: { value: 'Red' } },
        category: { connect: { id: categoryId } },
        store: { connect: { id: storeId } },
      },
    ];

    await database.product.createMany({
      data: products.map((product) => ({
        ...product,
        storeId,
        categoryId,
        sizeId: product.size.connect.value,
        colorId: product.color.connect.value,
      })),
    });

    console.log('Seeding finished.');
  } catch (error) {
    console.log('Error seeding the database', error);
  } finally {
    await database.$disconnect();
  }
}

main();