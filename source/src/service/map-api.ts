// first, include axios (or similar database talker)
import axios from 'axios'

const url = [
    // Length issue
    `https://gist.githubusercontent.com`,
    `/farrrr/dfda7dd7fccfec5474d3`,
    `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
].join("")

// endpoint root
const root = url;
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