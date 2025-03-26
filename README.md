## 🚀 Features
- **Real-Time Analytics**: Visualize stock levels, sales trends, and supplier performance
- **Multi-Warehouse Support** with AWS RDS PostgreSQL
- **Role-Based Access Control** (Admin/Manager/Staff)
- **Automated Reordering System** with threshold alerts
- **Barcode Integration** using AWS S3 for image storage
- **Supplier Management** with performance metrics

## 🛠 Tech Stack

| Frontend               | Backend              | AWS Services         |
|------------------------|----------------------|----------------------|
| Next.js 14 (App Router)| Node.js 20           | EC2 (Compute)        |
| Redux Toolkit          | Express.js           | RDS (PostgreSQL)     |
| Material UI Data Grid  | Prisma ORM           | S3 (Storage)         |
| Tailwind CSS           | JWT Authentication   | API Gateway          |
| React Hook Form        | Redis Caching        | Amplify Hosting      |

inventory-management/
├── client/               # Next.js application
│   ├── app/                # App router directory
│   ├── components/         # Reusable components
│   ├── lib/                # Redux store and API slices
│   ├── public/             # Static assets
│   └── styles/             # Tailwind/CSS files
│
├── server/                # Node.js server
│   ├── prisma/             # Prisma schema and migrations
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Helper functions
│
├── .github/                # CI/CD workflows
├── docs/                   # Documentation
└── scripts/                # Deployment scripts
