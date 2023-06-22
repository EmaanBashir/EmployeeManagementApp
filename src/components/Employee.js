import closeIcon from "../assets/close.png";
import {doc, deleteDoc } from 'firebase/firestore'
import { db } from '../services/firebase.config'

const Employee = (props) => {

  const deleteEmployee = async (id) => {
    try {
       let shouldDelete = window.confirm("Are you sure you want to delete this Employee?")
       if (shouldDelete){
        const documentRef = doc(db, "employee", id);
        await deleteDoc(documentRef)
        window.location.reload();
       }
       } catch (err) {
       console.log(err);
     }
   }
   

  let employee = props.employee;


  return (
    <div className="card mb-3 bg-darkblue border-0 text-white py-3 px-2 px-sm-4 px-md-5">
      <div className="row g-0">
        <div className="col-12 col-sm-11">
          <div className="card-body">
            <h4 className="card-title fw-semibold inc-letter-spacing font-32 mb-3">{employee.fname} {employee.lname}</h4>
            <p className="card-text font-20 mb-1">{employee.email}</p>
            <p className="card-text font-20">{employee.phone}</p>
          </div>
        </div>

        <div class = "col-12 col-sm-1 text-center d-sm-flex align-items-center justify-content-end">

        <button className = "border-0 bg-transparent me-0 me-sm-1 me-md-2 me-xl-3" onClick={() => deleteEmployee(employee.id)}><img src = {closeIcon}/></button>
        </div>
        
      </div>
    </div>
  );
};
  export default Employee;