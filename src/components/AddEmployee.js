import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase.config'

const AddEmployee = () => {
    const collectionRef = collection(db, 'employee');

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const submitEmployee = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collectionRef, {
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                timestamp: serverTimestamp()
            })
            window.location.reload();//////////////////////////////////////////////////////////////////
        } catch (err) {
            console.log(err);
        }
    }


    const clearInputs = () => {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="card border-blue-2 col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-sm-11 col-11 mx-auto my-5">
            <div className="card-header bg-blue text-white py-4 px-4 font-20">
                New Employee
            </div>
            <div className="card-body p-lg-5 p-md-4 p-sm-3 p-1">
                <form className="mx-5 my-3" onSubmit={submitEmployee}>
                    <div className="row mb-3">
                        <label for="firstName" className="col-lg-3 col-form-label font-20">First Name<span className="text-danger">*</span></label>
                        <div className="col-lg-9">
                            <input type="text" className="form-control border-blue-1 font-20" id="firstName" value={fname} onChange={(e) => setFname(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="lastName" className="col-lg-3 col-form-label font-20">Last Name<span className="text-danger">*</span></label>
                        <div className="col-lg-9">
                            <input type="text" className="form-control border-blue-1 font-20" id="lastName" value={lname} onChange={(e) => setLname(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="email" className="col-lg-3 col-form-label font-20">Email<span className="text-danger">*</span></label>
                        <div className="col-lg-9">
                            <input type="email" className="form-control border-blue-1 font-20" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="phone" className="col-lg-3 col-form-label font-20">Phone<span className="text-danger">*</span></label>
                        <div className="col-lg-9">
                            <input type="tel" className="form-control border-blue-1 font-20" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="d-flex justify-content-end mt-3 flex-wrap">
                            <button
                                type="button"
                                className="btn text-uppercase me-2 rounded-pill text-secondary px-4"
                                onClick={clearInputs}
                            >
                                Clear All
                            </button>
                            <button type="submit" className="btn btn-primary text-uppercase rounded-pill px-5 font-20">
                                Add
                            </button>
                        </div>
                    </div>
                </form>

                {/* <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );

}

export default AddEmployee;


