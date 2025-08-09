import { Router } from "express";
import { getAllUsers, loginuser, registerUser} from "../controllers/userController.js";
const router = Router();
router.get('/',getAllUsers);
router.post('/',registerUser);
router.post('/login',loginuser);
export default router;