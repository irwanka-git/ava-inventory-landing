import {generateClientToken} from "@/action/server";
import {getTokenBearerJwtSession} from "@/lib/session";

export async function getDataApi(path:string) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = await getTokenBearerJwtSession()
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);

    try {
        const response = await fetch(baseURL + path , {
            method: "GET",
            headers: headerFetch,
        });
        if (response.status==401 || response.status==403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message, data: result.data }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Gagal ambil data" }
}
export async function getDataApiWithoutAuth(path:string) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    try {
        const response = await fetch(baseURL + path , {
            method: "GET",
            headers: headerFetch,
        });
        if (response.status==401 || response.status==403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message, data: result.data }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Gagal ambil data" }
}
export async function getDatatableAPI(path: string) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = await getTokenBearerJwtSession()
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);

    try {
        const response = await fetch(baseURL +  path, {
            method: "GET",
            headers: headerFetch,
        });
        if (response.status==401 || response.status==403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            // console.log(result.data);
            return { status: true, message: "", data: result.data, pagination: result.pagination, info: result.info }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Gagal ambil data" }
}

export async function postApi(path:string , values: any) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = await getTokenBearerJwtSession()
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);
    try {
        const response = await fetch(baseURL + path, {
            method: "POST",
            headers: headerFetch,
            body: JSON.stringify(values),
        });
        if (response.status===401 || response.status===403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Terjadi Kesalahan" }
}
export async function postApiWithoutAuth(path:string , values: any) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    try {
        const response = await fetch(baseURL + path, {
            method: "POST",
            headers: headerFetch,
            body: JSON.stringify(values),
        });
        if (response.status===401 || response.status===403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Terjadi Kesalahan" }
}
export async function postApiLoginAuthGoogle(path:string, values: any) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _apikey = await generateClientToken()
    const headerFetch = new Headers();
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _apikey.x_api_key)
    const valuesSubmit = {
        auth_code: values,
    }
    try {
        const response = await fetch(baseURL + path, {
            method: "POST",
            headers: headerFetch,
            body: JSON.stringify(valuesSubmit),
        });
        const result = await response.json();
        if (result.status == true) {
            return { status: true,
                message: result.message,
                permission: result.permission,
                access_token: result.access_token,
                expire: result.expire,
                user: result.user,
            }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Upps Terjadi Kesalahan" }
}
export async function postApiLoginAccessTokenGoogle(path:string, values: any) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _apikey = await generateClientToken()
    const headerFetch = new Headers();
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _apikey.x_api_key)
    const valuesSubmit = {
        access_token: values,
    }
    try {
        const response = await fetch(baseURL + path, {
            method: "POST",
            headers: headerFetch,
            body: JSON.stringify(valuesSubmit),
        });
        const result = await response.json();
        if (result.status == true) {
            return { status: true,
                message: result.message,
                permission: result.permission,
                access_token: result.access_token,
                expire: result.expire,
                user: result.user,
            }
        }
        return { status: false, message: result.message }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Upps Terjadi Kesalahan" }
}
export async function postApiWithResponseData(scope:string, values: any) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = await getTokenBearerJwtSession()
    headerFetch.append("Content-Type", "application/json");
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);
    try {
        const response = await fetch(baseURL + scope, {
            method: "POST",
            headers: headerFetch,
            body: JSON.stringify(values),
        });
        if (response.status===401 || response.status===403){
            document.location = "/auth/forbidden"
            return
        }
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message, data: result.data! }
        }
        return { status: false, message: result.message, data:result.data! }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Terjadi Kesalahan" }
}
export async function submitUpload(file: any, filename: string) {
    const baseURL = process.env.NEXT_PUBLIC_URL_API_UPLOAD!;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = process.env.NEXT_PUBLIC_TOKEN_API_UPLOAD!
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);
    const formData = new FormData();
    formData.append('file', file, file.name);
    try {
        const response = await fetch(baseURL +   "/submit-upload", {
            method: "POST",
            mode: "cors",
            headers: headerFetch,
            body: formData,
        });
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message, data: result.data }
        }
        return { status: false, message: result.message, data : null }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Terjadi Kesalahan" }
}


export async function submitUploadXLS(file: any, filename: any) {
    const baseURL = process.env.NEXT_PUBLIC_URL_API_UPLOAD!;
    const _api = await generateClientToken();
    const headerFetch = new Headers();
    const _token = process.env.NEXT_PUBLIC_TOKEN_API_UPLOAD!
    headerFetch.append("x-api-key", _api.x_api_key);
    headerFetch.append("Authorization", "Bearer " + _token);
    const formData = new FormData();
    formData.append('file', file, file.name);
    try {
        const response = await fetch(baseURL +   "/submit-upload-xls", {
            method: "POST",
            mode: "cors",
            headers: headerFetch,
            body: formData,
        });
        const result = await response.json();
        if (result.status == true) {
            return { status: true, message: result.message, data: result.data }
        }
        return { status: false, message: result.message, data : null }
    } catch (error) {
        console.error("Error:", error);
    }
    return { status: false, message: "Terjadi Kesalahan" }
}
