"use server"
import {RSAEncrypt} from "@/lib/crypto";

export async function generateClientToken() {

    const currentTime = new Date().getTime();
    const timeExpired = Math.ceil(currentTime/1000)
    const encrypt  =  RSAEncrypt(timeExpired.toString());
    return {"status": true, x_api_key:encrypt}
}

