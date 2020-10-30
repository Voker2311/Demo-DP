import React, { useState } from 'react'
import './Patient.css';
import Treatment from './Treatment';
import Widget from './Widget';
import PatientSidebarRow from './PatientSidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessibleIcon from '@material-ui/icons/Accessible';
import PersonIcon from '@material-ui/icons/Person';
import BorderColorIcon from '@material-ui/icons/BorderColor';
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
            
            <PatientSidebarRow title="COVID-19 Measures" Icon={BorderColorIcon} />
            </div>

            <div className="patient__both">
            <div className="patient__middle">
                {treatment && <Treatment medicine="paracetomol, citizen, glucose, Vicks" disease="Diabetes" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officia. Sit inventore beatae atque quas, eveniet quasi rerum eaque, repellendus laboriosam qui voluptatem animi illum mollitia ratione, et pariatur vitae!" doctor="Murli prasad Sharma" hospital="Grant Medical Hospital" />}
                {condition && <Condition condition="Thyroids" cIntensity="Low" allergy="Khujli" aIntensity="Very High" />}
                {doctor && <DoctorList name="Murli Sharma" phone="+91-8879844352" workplace="Sion Hospital" treatment="Cancer" specialization="NeuroSurgeon" image="data:image/jpeg;base64,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" />}
            </div>

            <div className="patient__widget">
                <Widget width="320" />
            </div>
            </div>

           
        </div>
    )
}

export default Patient;