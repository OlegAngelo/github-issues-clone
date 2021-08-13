import axios from "axios";

const GithubApi = {
  fetchIssues: async (page, state) => {
    const { data } = await axios.get(
      "https://api.github.com/repos/vuejs/vue/issues",
      {
        params: {
          page,
          per_page: 25,
          state,
        },
      }
    );

    return data;
  },

  fetchIssueDetails: async (number) => {
    const { data } = await axios.get(
      `https://api.github.com/repos/vuejs/vue/issues/${number}`
    );

    return data;
  },
};

export default GithubApi;
