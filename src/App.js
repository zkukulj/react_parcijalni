import './App.css';
import { Button, ContentWrapper, ErrWrapper, FormWrapper, ReposWrapper, TextSearch } from './utils/styles/defaultStyles';
import React, { useState,useEffect } from 'react'
import { reposGithub,githubUser } from "../src/api/Github";
import GithubUser from './components/GithubUser';
import GithubRepos from './components/GithubRepos';

function App() {
  const [searchForm, setSearchForm] = useState(false);
  const [accountExists, setAccountExists] = useState(true);
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {


  }, [users,repositories]);

  const searchGithub = async (e) => {
    e.preventDefault();
    let searchTerm=document.querySelector("input").value;
    try {
      const userData = await githubUser(searchTerm);
      const repos = await reposGithub(searchTerm);
      console.log(repos );
      setUsers(user =>[{"id":userData.id,"avatar_url":userData.avatar_url,"name":userData.name,"location":userData.location,"bio":userData.bio}]);
      repos.forEach(repo => {
        setRepositories(repos =>[...repos,repo]);
      });
      setAccountExists(true);
      setSearchForm(true);
    } catch (error) {
      setUsers([]);
      setRepositories([]);
      setSearchForm(true);
      setAccountExists(false);
    }

  }

  const searchAgain = (e) => {
    e.preventDefault();
    setSearchForm(false);
  }



  return !searchForm ? (
    <>
      <FormWrapper>
        <TextSearch placeholder="Enter search term.."></TextSearch>
        <Button onClick={searchGithub}>Search Github</Button>
      </FormWrapper>
    </>
  )
  
  : !accountExists ? (
    <>
      <ContentWrapper>
        <ErrWrapper>Account searched for does not exist!</ErrWrapper>
        <Button isReset onClick={searchAgain}>Reset and search again</Button>
      </ContentWrapper>    
    </>
  ) : (
    <>
      <ContentWrapper>
              {
              users ?
              users.map((user) => (
                <GithubUser
                  key={user.id}
                  avatar_url={user.avatar_url}
                  bio={user.bio}
                  location={user.location}
                />
              ))
              :""
            }
              {
              repositories ?
              <ReposWrapper>
              {
              repositories.map((repo) => (
                <GithubRepos
                  key={repo.id}
                  name={repo.name}
                />
              ))
              }
              </ReposWrapper>
              :""
            }
        <Button isReset onClick={searchAgain}>Reset and search again</Button>
      </ContentWrapper>
    </>
  );
}

export default App;
