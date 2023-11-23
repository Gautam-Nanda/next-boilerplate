import { compareSync } from "bcrypt";
import { fetchUser } from "@/services/user.service";
import { withSessionRoute } from "@/lib/ironOptions";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
    const { email, password } = await req.body;

    try {

        const user = await fetchUser(email);
        if (user === null) {
            return res.status(400).json({
                status: 400,
                message: "User not found, try signing up...",
            });
        }

        const isMatch = await compareSync(password, user.password)
        delete user.password;

        if (isMatch) {
            req.session.user = user;
            await req.session.save();
            res.json({ status: 200, user: user });
        } else {
            res.statusCode = 401;
            res.send({ status: 401, message: "Invalid email or password" });
        }
    }
    catch (err) {
        res.send({ status: 400, message: JSON.stringify(err) });
    }

}