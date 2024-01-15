import { SignJWT, jwtVerify } from "jose"
async function GenAccessToke(data){
    const token = await new SignJWT(data).setProtectedHeader({alg:"HS256"}).setExpirationTime("1d").setIssuedAt().sign(new TextEncoder().encode("jdzfkausifasidfgasdyu"))

return token

}
async function JWTVerify(token){
    try {
        const newtoken = await jwtVerify(token ,new TextEncoder().encode("jdzfkausifasidfgasdyu"))
        const payload = newtoken.payload
        return payload
    } catch (error) {
        console.log(error)
        return false
    }
}

export {GenAccessToke, JWTVerify}