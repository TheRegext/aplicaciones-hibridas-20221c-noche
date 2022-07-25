import React from 'react';
import {useContext} from 'react'
import {ProjectContext} from '../../Context/ProjectContext'

function ProjectShowCount(props) {
    const {projects} = useContext(ProjectContext)
    return (
        <span>{projects.length}</span>
    )
}

export default ProjectShowCount;