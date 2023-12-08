import React from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {

    const [vans, setVans] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/vans')
            .then((res) => res.json())
            .then((data) => {
                setVans(data.vans);
                   })
    }, []);

    const vanElements = vans.map((van) => {
        return (
        <Link key={van.id} to={`/vans/${van.id}`}>
            <div  className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
         
        )});

    return (
       <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>            
       </div> 
    )
}