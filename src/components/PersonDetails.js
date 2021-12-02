import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import HookService from '../service/HookService';

///

const PersonDetails = () => {
    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: '', lastName: '',email: '', title: ''});
    const [message, setMessage] = useState({value: '', type: ''});
    const history = useHistory();

    useEffect(()=> {
        const hookService = new HookService();
        hookService.getPersonById(params.id).then(res => {
            //update state
            console.log("PERSON:" , res);
            if(res.status === 200){
                console.log(res.data);
                setPerson(res.data);
            }else {
                // update error state
                setMessage({value: 'API Err: '+ res.status, type: 'danger'})
            }
        });
    }, []);
    
    return (
        <div className="container">
            <div className="card border-light"style={{width: '400px' }}>
                <div className="card-header bg-dark text-white">
                    Person Details
                </div>
                <div className="card-bodys">
                    <h5 className="card-title bg-dark">Title : { person.title}</h5>
                    <p className="card text bg-dark "> ID :  { person.id}</p>
                    <p className="card text bg-dark "> Name :  { person.firstName} {person.lastName}</p>
                    <p className="card text bg-dark "> Email :  { person.email}</p>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark" onClick={()=> history.push('/crud')}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;