import axios from 'axios';

const getData = (succesFunction, errorFunction) => {
    axios.get("http://localhost:3500/articles")
    .then((result)=> {
        console.log(result.data.body);
        succesFunction(result.data.body);
    })
    .catch((e)=>{
        errorFunction();
    });
};

export { getData };
