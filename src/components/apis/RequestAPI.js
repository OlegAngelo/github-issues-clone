import axios from "axios";

const RequestAPI = {
  githubAPI: async (page) => {
    const { data } = await axios.get(
      "https://api.github.com/repos/vuejs/vue/issues",
      {
        params: {
          page,
          per_page: 25,
          filter: "all",
        },
      }
    );

    return data;
  },
};

export default RequestAPI;
