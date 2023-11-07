import { hashSync } from "bcrypt";
import { createUser, fetchUser } from "../../../services/userService";
import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(SignUp);

async function SignUp(req, res) {
    const body = await req.body;
    const response = await createUser({
        name: body.name,
        email: body.email,
        password: hashSync(body.password, 10),
    });
    const user = await fetchUser(body.email);
    req.session.user = user;
    await req.session.save();
    res.send({ status: 200, message: JSON.stringify(response) });
}