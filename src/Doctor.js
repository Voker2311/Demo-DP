import React, { useState } from 'react';
import './Doctor.css';
import PatientProfile from './PatientProfile';
import PatientSidebarRow from './PatientSidebarRow';
import Widget from './Widget';
import SearchIcon from '@material-ui/icons/Search';
import AccessibleIcon from '@material-ui/icons/Accessible';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AttendingPatients from "./AttendingPatients";
import SearchPatients from './SearchPatients';
import EditIcon from '@material-ui/icons/Edit';

function Doctor() {
    const [treatment,setTreatment] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [condition, setCondition] = useState(false);
    const [doctor,setDoctor] = useState(false);
    
    return (
        <div className="doctor">
            
        <div className="doctor__left">
        <div onClick={() => setModalShow(true)}>
            <PatientSidebarRow type="button"  title="Khushal Shinde" src="https://lh3.googleusercontent.com/ogw/ADGmqu-LXZM-WOxioKCW2MJEgJzaJOPsFrNQHdVJmQGnW40=s83-c-mo" />
            <PatientProfile
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>

        <div onClick={() => (setTreatment(true), setCondition(false), setDoctor(false))}>
            <PatientSidebarRow  title="Attending Patients" Icon={AccessibleIcon} />
        </div>
        
        <div onClick={() => (setCondition(true), setTreatment(false), setDoctor(false))}>
            <PatientSidebarRow title="Search Patients" Icon={SearchIcon} />
        </div>
        
        <div onClick={() =>(setDoctor(true),setCondition(false),setTreatment(false))}>
            <PatientSidebarRow title="Edit Patient" Icon={EditIcon} />
        </div>
        
        {/* <PatientSidebarRow title="COVID-19 Measures" Icon={BorderColorIcon} /> */}
        </div>

        <div className="doctor__both">
        <div className="doctor__middle">
            {/* {treatment && }
            {condition && }
            {doctor && } */}
            {treatment && <AttendingPatients name="Akshay Shinde" image="https://media-exp1.licdn.com/dms/image/C5603AQEMYNRffDs8Xw/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=0NrphqVesQzjjzjHZM4KhpRDNxZoPMS9SeHUl-YNSUI" disease="Night blindness" phone="+917977641778" allergy="Kiwi" condition="Mild" medicine="Crocin, aspirin, Vitamin-C"/>}
            {condition && <SearchPatients name="Ankit Singh" patientId="ANKIT0325" image="https://media-exp1.licdn.com/dms/image/C5103AQGZhHpFNHQUIQ/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=Va13UBwQpq5s7kd1kLT96sP5WLbF9CELsifnJlN1fWA"  />}
        </div>

        <div className="doctor__widget">
            <Widget width="320" />
        </div>
        </div>
       
    </div>
    )
}

export default Doctor;
