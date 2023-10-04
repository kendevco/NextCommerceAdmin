
# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router

This project is inspired by [Code With Antonio's YouTube tutorial](https://www.youtube.com/channel/UCcDGs4xksF0Y3FvF8gbqZSg) on building a Full Stack E-Commerce platform using Next.js 13 App Router, React, Tailwind, Prisma, and MySQL. The tutorial emphasizes the utilization of Next.js 13 App Router for creating a seamless navigation and user experience in a fully functional E-Commerce platform with an Admin Dashboard.

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [NextAuth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)

## Features

- Admin Dashboard for managing products, categories, orders, and more.
- E-Commerce Storefront for browsing and purchasing products.
- Responsive design implemented using Tailwind CSS.
- User authentication handled by NextAuth.
- Data management with Prisma and MySQL.
- Payment processing with Stripe.
- Deployment on Vercel.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/project-name.git
   ```
2. Install NPM packages
   ```
   npm install
   ```

3. Configure your MySQL database and update the prisma/.env file with your MySQL credentials. Go to https://mongodb.com to set up your own MongoDB.
   ```bash 
   DATABASE_URL="mysql://user:password@localhost:3306/mydb"
   ```

4. Apply the database schema
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Acknowledgements

- [Code With Antonio](https://www.youtube.com/channel/UCcDGs4xksF0Y3FvF8gbqZSg)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Stripe Documentation](https://stripe.com/docs)
