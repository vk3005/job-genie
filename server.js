//API Documentatiom
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
//Package imports
import express from "express";
import "express-async-errors";
import dotenv from 'dotenv';
import colors from "colors";
import cors from 'cors'
import morgan from "morgan";
import helmet from 'helmet';
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import connecDB from "./config/db.js";
//Routes imports
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRouters from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoute.js"

//Dot ENV config
dotenv.config();

// mongodb connection
connecDB();

//Swagger api config
//Swagger api options
const options ={
    definition :{
        openapi: "3.0.0",
        info :{
            title : "Job_portal",
            Description:"Node Expressjs Job Portal Application"
        },
        servers :[
            {
                url :"http://localhost:8080"
            }
        ]

    },
    apis: ["./routes/*.js"],
};

const spec =swaggerJSDoc(options)

//rest object
const app = express()

//middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use("/api/v1/test", testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRouters);
app.use('/api/v1/job', jobsRoutes);

//homeroute root
app.use("/api-doc", swaggerUi.serve , swaggerUi.setup(spec));

// validation middleware
app.use(errorMiddleware);

// port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on port numner ${PORT}`.bgBlue.white);
})