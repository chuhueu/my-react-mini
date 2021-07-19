import React, {useState, useEffect} from 'react'
import Loading from './components/Loading';
import Jobs from './components/Jobs';


const url = "https://course-api.com/react-tabs-project";

const App2 = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const newJobs = await response.json();
            setJobs(newJobs);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    if(loading){
        return(
            <Loading />
        )
    }
    return (
        <Jobs jobs={jobs}/>
    )
}

export default App2
