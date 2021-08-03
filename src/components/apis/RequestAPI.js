import axios from "axios";

const RequestAPI = {
  githubAPI: async () => {
    const { data } = await axios.get('https://api.github.com/repos/vuejs/vue/issues', {
        params: {
        per_page: 25,
        page: 1,
        filter: 'all'
        }
    });
        
    return data;
  }
}

export default RequestAPI;
 
