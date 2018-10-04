// first, include axios (or similar database talker)
import axios from 'axios'

// endpoint root
const root = "/Map";
export default class MapAPI {
    static get(condition: any) {
        return axios.get(root);
    }
    static edit(payload: any) {
        return axios.put(`${root}/edit/payload.id`, payload);
    }
    static add(payload: any) {
        return axios.post(root, payload);
    }
    static delete(payload: any) {
        return axios.delete(`${root}/delete/${payload.id}`);
    }
}