import React, { useState } from 'react'
import './Patient.css';
import Treatment from './Treatment';
import Widget from './Widget';
import PatientSidebarRow from './PatientSidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessibleIcon from '@material-ui/icons/Accessible';
import PersonIcon from '@material-ui/icons/Person';
import PatientProfile from './PatientProfile';
import Condition from './Condition';
import DoctorList from './DoctorList';

function Patient() {
    const [treatment,setTreatment] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [condition, setCondition] = useState(false);
    const [doctor,setDoctor] = useState(false);

    return (
        <div className="patient">
            
            <div className="patient__left">
            <div onClick={() => setModalShow(true)}>
                <PatientSidebarRow type="button"  title="Khushal Shinde" src="https://lh3.googleusercontent.com/ogw/ADGmqu-LXZM-WOxioKCW2MJEgJzaJOPsFrNQHdVJmQGnW40=s83-c-mo" />
                <PatientProfile
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </div>

            <div onClick={() => (setTreatment(true), setCondition(false), setDoctor(false))}>
                <PatientSidebarRow  title="Treatments" Icon={LocalHospitalIcon} />
            </div>
            
            <div onClick={() => (setCondition(true), setTreatment(false), setDoctor(false))}>
                <PatientSidebarRow title="Conditions/Allergies" Icon={AccessibleIcon} />
            </div>
            
            <div onClick={() =>(setDoctor(true),setCondition(false),setTreatment(false))}>
                <PatientSidebarRow title="Doctor's List" Icon={PersonIcon} />
            </div>
            
            {/* <PatientSidebarRow title="COVID-19 Measures" Icon={BorderColorIcon} /> */}
            </div>

            <div className="patient__both">
            <div className="patient__middle">
                {treatment && <Treatment medicine="paracetomol, citizen, glucose, Vicks" disease="Diabetes" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officia. Sit inventore beatae atque quas, eveniet quasi rerum eaque, repellendus laboriosam qui voluptatem animi illum mollitia ratione, et pariatur vitae!" doctor="Murli prasad Sharma" hospital="Grant Medical Hospital" />}
                {condition && <Condition condition="Thyroids" cIntensity="Low" allergy="Khujli" aIntensity="Very High" />}
                {doctor && <DoctorList name="Murli Sharma" phone="+91-8879844352" workplace="Sion Hospital" treatment="Cancer" specialization="NeuroSurgeon" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNXbC42y8Q0TWjAkZTcjK4v1Jmghv8TpEz2Q&usqp=CAU" />}
            </div>

            <div className="patient__widget">
                <Widget width="320" />
            </div>
            </div>
           
        </div>
    )
}

export default Patient;
