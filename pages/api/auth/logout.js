import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res) {
    req.session.destroy();
    res.send({ status: 200, ok: true });
}