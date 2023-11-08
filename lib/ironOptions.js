import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
export const ironOptions = {
    cookieName: "PROJECT_SESSION_COOKIE",
    password: process.env.APPLICATION_SECRET,
};

export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, ironOptions);
}