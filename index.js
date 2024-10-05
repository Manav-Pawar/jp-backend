import dotenv from "dotenv";
dotenv.config({});
console.log("MONGO_URL:", process.env.MONGO_URL//, {
   // useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
);

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:['https://jp-frontend-f99u8yppf-manavs-projects-94a598ca.vercel.app','http://localhost:5173','https://jp-frontend-tau.vercel.app','https://job-dhundo.vercel.app'],
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// // Start the server after connecting to MongoDB
// const startServer = async () => {
//     try {
//       await connectDB(); // Make sure MongoDB is connected
//       app.listen(PORT, () => {
//         console.log(`Server running at port ${PORT}`);
//       });
//     } catch (error) {
//       console.error('Failed to connect to MongoDB', error);
//       process.exit(1); // Exit the process if connection fails
//     }
//   };
//   startServer();
  
// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})