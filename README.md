# Force Apparel

A professional e-commerce platform for apparel and uniforms built with React, Vite, Node.js, and Express.

## Project Structure

```
force-apparel/
├── client/              # Frontend (React + Vite)
├── server/              # Backend (Express.js)
├── docs/                # Documentation
├── .gitignore
└── README.md
```

## Frontend Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd client
npm install
```

### Running the Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or another available port if 5173 is in use)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Frontend Dependencies

- **react-router-dom** - Routing
- **axios** - HTTP client
- **tailwindcss** - CSS framework
- **framer-motion** - Animation library
- **react-icons** - Icon library
- **react-hot-toast** - Notifications
- **swiper** - Carousel/slider component

### Frontend Structure

```
src/
├── assets/              # Images, icons, fonts
├── components/          # Reusable components
│   ├── ui/              # UI components
│   ├── layout/          # Layout components
│   ├── cards/           # Card components
│   ├── forms/           # Form components
│   ├── filters/         # Filter components
│   └── sections/        # Page sections
├── pages/               # Page components
├── routes/              # Route definitions
├── layouts/             # Layout components
├── hooks/               # Custom hooks
├── services/            # API services
├── context/             # Context API
├── utils/               # Utility functions
├── constants/           # Constants
├── data/                # Mock data
├── styles/              # Global styles
├── App.jsx
└── main.jsx
```

## Backend Setup

### Installation

```bash
cd server
npm install
```

### Environment Configuration

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

### Running the Development Server

```bash
npm run dev
```

The backend will be running on `http://localhost:5000`

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Backend Dependencies

- **express** - Web framework
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **multer** - File upload middleware
- **cloudinary** - Cloud image storage

### Backend Structure

```
server/
├── controllers/         # Request handlers
├── routes/              # API routes
├── models/              # Database models
├── middleware/          # Custom middleware
├── config/              # Configuration
├── uploads/             # Temporary uploads
├── utils/               # Utility functions
├── .env
└── server.js
```

## Running Both Servers

### Terminal 1 - Frontend

```bash
cd client
npm run dev
```

### Terminal 2 - Backend

```bash
cd server
npm run dev
```

## Pages

- **Home** - Landing page
- **About** - About the company
- **Shop** - Product listing
- **Product Details** - Individual product page
- **Portfolio** - Portfolio/gallery
- **FAQ** - Frequently asked questions
- **Contact** - Contact form
- **Cart** - Shopping cart
- **Checkout** - Checkout process
- **Auth** - Authentication (Login/Register)

## Git Setup

The repository is already initialized with:
- `.gitignore` - Ignores node_modules, .env, dist, and other common files
- Commits start from the project root

## Getting Started

1. Clone or navigate to the project directory
2. Follow the Frontend Setup and Backend Setup instructions
3. Run both servers in separate terminals
4. Open `http://localhost:5173` in your browser

## Contributing

Follow the project structure guidelines and maintain code consistency.

## License

This project is licensed under the ISC License.
