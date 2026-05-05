import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookiee.token;
        if (!token) {
            return res.status(401).json({
                message: "user not authenticated",
                success: false,
            })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Invail token",
                success: false,
            })
        };
        rq.id = decode.userId;

        next();



    } catch (error) {
        console.log(error);


    }
}
export default isAuthenticated;
