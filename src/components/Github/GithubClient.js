
function fetchGithubData(setReposData, setLanguages) {
    fetch('https://api.github.com/users/fabpot/repos')
    .then(val=>val.json())
    .then(val=>{
        let result = [];
        let ls = new Set();
        val.forEach((repo,index)=>{
            let obj = {};
            obj.name = repo.name;
            obj.language = repo.language;
            ls.add(repo.language);
            obj.description = repo.description;
            obj.stars = repo.stargazers_count;
            obj.updatedAt = repo.updated_at.split('T')[0];
            result.push(obj);
        });
        setReposData(result);
        setLanguages([...ls]);
    })
    .catch(e=>console.log(e));
}

//name, language,  updated_at, stargazers_count, description

export {
    fetchGithubData
}