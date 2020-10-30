import { Avatar } from '@material-ui/core'
import React from 'react';
import "./PatientSidebarRow.css";

function PatientSidebarRow({title, src, Icon}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h6>{title}</h6>
        </div>
    )
}

export default PatientSidebarRow
