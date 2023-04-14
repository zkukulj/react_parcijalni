import apiDefault from "./Api";
export const reposGithub = (user) => {
    return fetch(`${apiDefault}${user}/repos`, {
      headers: {},
    }).then((res) => {
      if (!res.ok) {
        throw res;
      }
  
      return res.json();
    });
  };
  export const githubUser = (search) => {
    return fetch(`${apiDefault}${search}`, {
      headers: {},
    }).then((res) => {
      if (!res.ok) {
        throw res;
      }
  
      return res.json();
    });
  };