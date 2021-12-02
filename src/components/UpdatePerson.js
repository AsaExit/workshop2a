import React, {Fragment, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import HookService from '../service/HookService';

import { useForm } from 'react-hook-form';

    

const UpdatePerson = () => {
// state
    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: '', lastName: '',email: '', title: ''});
    const [message, setMessage] = useState({value: '', type: ''});
    const history = useHistory();
    const [reload, setReload] = useState(false);


    useEffect(()=> {
        const hookService = new HookService();
        hookService.getPersonById(params.id).then(res => {
            //update state
            console.log("Person:" , res);
            if(res.status === 200){
                console.log(res.data);
                setPerson(res.data);
            }else {
                // update error state
                setMessage({value: 'API err: '+ res.status, type: 'danger'})
            }
        });
    }, []);

    const Form = () => {

        const {register, handleSubmit, reset, formState: {errors} } = useForm();

        const savePerson = (data) => {
            console.log("before"+ data);
            data.id = person.id;
            console.log("after"+data);
            // call  API
            const hookService = new HookService();
            hookService.updatePerson(data).then(res => {
                if(res.status === 204){
                    // Displays message
                    setMessage({value: 'Put for person Id:' + res.data.id , type: 'success'});
                     // update the state = reload the useEffect
                    setReload(!reload);
                }else {
                    // Dispalys an error message
                    setMessage({value: 'Error:'+ res.status, type: 'danger'});
                }
            });

            history.push(`/crud/`);
           
        }

        return(
            
            <Fragment> 
                <h2>Update person</h2> 
                { person.firstName} { person.lastName}   
                <form className="form-control m-2 p-3 bg-dark" onSubmit={handleSubmit(savePerson)}>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("firstName", {required: true})} placeholder={person.firstName} />
                            {errors.firstName && <span className="text-danger">FirstName is Required!</span>}
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("lastName", {required: true})}placeholder={person.lastName} />
                            {errors.lastName && <span className="text-danger">LastName is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("email", {required: true})}placeholder={person.email} />
                            {errors.email && <span className="text-danger">Email is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("title")}placeholder={person.title} />
                            {errors.title && <span className="text-danger">Title is Required!</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Update</button>

                    <button type="button" className="btn btn-dark m-2" onClick={()=> reset() }>Reset</button>
                </form>
            </Fragment>
        );
    };

    return (
        <div>
           <Form/> 
        </div>
    );
};

export default UpdatePerson;