import express  from 'express';

// const cors=require('cors')
// router.use(cors)
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts,getproductById} from '../controller/product-controller.js';


const  router = express.Router();


router.post('/Signup',userSignup);
router.post('/Login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id', getproductById)



export default router;