import Employee from "./Employee";
import React, { useState, useEffect } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../services/firebase.config'


const CurrentEmployees = () => {

    const collectionRef = collection(db, 'employee');
    const q = query(collectionRef, orderBy('timestamp'))

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = async () => {
        await getDocs(q).then((emps) => {
            let employeeData = emps.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setEmployees(employeeData)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="bg-blue">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-sm-11 col-11 mx-auto py-5">
                <h4 className = "text-white fw-semibold tracking-wide inc-letter-spacing font-32">Current Employees</h4>
                <div className = "my-4">
                {employees.map((emp) =>
                    <Employee employee={emp} getEmpFunc = {getEmployees} key={emp.id} />
                )}
                </div>
            </div>
        </div>
    );
}

export default CurrentEmployees;