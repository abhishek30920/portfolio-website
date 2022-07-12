import React, {useEffect, useState} from 'react';
import {fetchGithubData} from "./GithubClient";
import "./styles/Github.css"

function Github() {

    const [reposData, setReposData] = useState(null);
    const [filteredData, setFilteredData ] = useState(null);
    const [languages, setLanguages] = useState(null);
    const [searchName, setSearchName] = useState("")

    useEffect(()=>{
        fetchGithubData(setReposData,setLanguages);
    },[]);

    const showData = (repo) =>{
        return <section id="repo-data-card-wrapper">
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <section>
            <p>stars:{repo.stars}</p>
            <p>language:{repo.language}</p>
            <p>updated_at:{repo.updatedAt}</p>
        </section>
    </section>
    }

    const getRepoCards = () => {
        return <section>
            {reposData && reposData.map((repo,i)=>{
                return showData(repo)
            })}
        </section>
    }

    const handleLanguageChange = (e) =>{
        if(e.target.value!=='Languages') {

            let out = reposData.filter((repo,i)=>{
                return repo.language===e.target.value
            })
            setFilteredData(out)
        } else {
            setFilteredData(null)
        }
    }

    const getLanguageFilter  = () =>{
        return <select onChange={handleLanguageChange}>
            <option>Languages</option>
            {
                languages && languages.map((l,i)=>{
                    if(l)
                    return <option key={i}>{l}</option>
                })
            }
        </select>
    }

    const getFilteredData = () =>{
        return <section>
            {filteredData && filteredData.map((data,i)=>{
                return showData(data);
            })}
        </section>
    }

    const handleSortChange = (e) =>{
        let sortType = e.target.value;
        let temp = reposData.slice(0);
        if(sortType==='Stars') {
            temp.sort((a,b)=>b.stars-a.stars);
        } else if(sortType==='Last Updated') {
            temp.sort(function(a,b){
                let dayA = new Date(a.updatedAt);
                let dayB = new Date(b.updatedAt);
                return dayB.getTime() - dayA.getTime();
            })
        } else {
            temp = [];
        }
        setFilteredData(temp);
    }

    const getSortMenu = () =>{
        return <select onChange={handleSortChange}>
            <option>Sort</option>
            <option>Stars</option>
            <option>Last Updated</option>
        </select>
    }

    const handleSearchChange = (e) =>{
        setSearchName(e.target.value);
    }

    const isSubsequence = (name) =>{
        let i=0, j=0, count=0;
        while(i<name.length) {
            if(name[i]===searchName[j]){
                i++;j++;count++;
            } else {
                i++;
            }
            if(count===searchName.length)
                return true;
        }
        return false;
    }

    const handleSearchClick = () =>{
        let out = reposData.filter((repo)=>{
            if(isSubsequence(repo.name))
                return repo;
        })
        setFilteredData(out);
        if(!searchName)
            setFilteredData([]);
    }

    const getSearchBar = () =>{
        return <section>
            <input type="text" placeholder='search' onChange={handleSearchChange}/>
            <button onClick={handleSearchClick}>search</button>
        </section>
    }

    const getParallax = () =>{
        return <div className="parallax-class">
            <h1>Hello</h1>
        </div>
    }

  return (
    <div>
        {getSearchBar()}
        {getLanguageFilter()}
        {getSortMenu()}
        {getParallax()}
        {getFilteredData()}
        {getRepoCards()}
    </div>
  )
}

export default Github