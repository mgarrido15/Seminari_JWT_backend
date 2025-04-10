import pkg from "jsonwebtoken";
const { sign, verify } = pkg;   //Importamos las funciones sign y verify de la librería jsonwebtoken
const JWT_SECRET = process.env.JWT_SECRET || "token.010101010101";

//No debemos pasar información sensible en el payload, en este caso vamos a pasar como parametro el ID del usuario
const generateToken = (id:string, name: string) => {
    const jwt = sign({id, name}, JWT_SECRET, {expiresIn: '20s'});
    return jwt;
};

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET) as any;
    return isOk;

};

const generateRefreshToken = (id: string, name: string) => {
    const jwt = sign({ id, name }, JWT_SECRET, { expiresIn: '5mins' });
    return jwt;
};

const verifyRefreshToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken, generateRefreshToken, verifyRefreshToken };