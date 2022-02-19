import { useEffect, useState } from "react"

export const Page = () => {
    let [user,setUser]=useState([]);
    let [loading,setLoading]=useState(false)
    useEffect(async()=> {
        try{

            let res = await fetch("https://gh-trending-api.herokuapp.com/repositories")
            let data = await res.json()
            // console.log("here")
            setUser(data)
            setLoading((prev)=>!prev)
        }
        catch(err){
            console.log(err)
        }
    },[])
 let a
    
   
    return !loading?<div className="spinner"></div>: <div>
            {/* <p style={{float:left"}}>Made with love by Keshav</p> */}
           <h1><a href="https://github.com/trending" target="_blank" className="textdeconull">Trending Github Repo</a></h1>
           <br/>
           <br/>
        
        <div className="flex">
            
            {user.map(function(item){
                let url=item.url
                let userurl="https://github.com/"+item.username
                return(
                    <>
                 
                    <div id="indiv" key={item.rank}>
                        
                     
                        
                        <h3 ><a target="_blank" className="textdeconull" href={userurl}>{item.username}</a> | <a href={url} className="textdeconull" target="_blank">{item.repositoryName}</a></h3>
                        <h5>Description-{(item.description)}</h5>
                        <p >Stars ★-{item.totalStars} | Forked-{item.forks}</p>
                        <p>Language-{item.language}</p>
                       
                    </div>
                    </>
                )
            })}
        </div>
    </div>
}