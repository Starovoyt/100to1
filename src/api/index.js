import axios from 'axios';

const url = 'http://192.168.0.18:3000/api/';

class ClientApi {
    static async getSettings() {
        const getSettingsResponse = await axios.get(`${url}settings/`);
        return getSettingsResponse?.data || {};
    }

    static async getRounds() {
        const getRoundsResponse = await axios.get(`${url}rounds/`);
        return getRoundsResponse?.data || [];
    }

    static async getAnswers() {
        const getAnswersResponse = await axios.get(`${url}answers/`);
        return getAnswersResponse?.data || [];
    }
}

export default ClientApi;
