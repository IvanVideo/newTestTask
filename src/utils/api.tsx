class Api {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getData() {
        return fetch(`${this.baseUrl}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            return res.ok
                ? res.json()
                : Promise.reject(
                    new Error(`Ошибка ${res.status} : ${res.statusText}`)
                );
        });
    }
}

let baseUrl = "https://artisant.io/api/products";

const api = new Api(baseUrl);
export default api;