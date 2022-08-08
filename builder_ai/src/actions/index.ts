import axios from "axios";

export const checkStatus = async (regNo: string, amount: number): Promise<boolean> => {

    const body = {
        "car-registration": regNo,
        charge: amount
    }

    try {
        const resp = await axios.post("https://httpstat.us/200", body);
        if (resp.data?.code === 200) {
            return true;
        }
    } catch (err) { }
    return false;
}