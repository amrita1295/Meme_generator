import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CustomPagination from '../components/CustomPagination';
import Memes from '../components/Memes';
function HomePage(){
    const [memes,setMemes]=useState([]);
    const [page,setPage]=useState(0);
    const [fade, setFade]=useState('top');
    async function getMemes(){
        const response=await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
    }
    
    useEffect(()=>{
        getMemes();
    },[]);

    return(
        <main>
            <div onClick={()=>setFade('top')}>
                <CustomPagination page={page} setPage={setPage}/>
            </div>
            <Memes fade={fade} memes={memes} page={page}/>
            <div onClick={()=>setFade('bottom')}>
                <CustomPagination page={page} setPage={setPage} />
            </div>
        </main>
    )
}
export default HomePage;