import { useState } from "react";
import PropTypes from "prop-types";

function ProjectForm({onSubmit, buttonText, project}){
    const [name, setName] = useState(project?.name || "");
    const [description, setDescription] = useState(project?.description || "");

    function handleSubmit(event){
        event.preventDefault();

        onSubmit({name, description});
    }

    function handleName(event){
        setName(event.target.value);
    }

    function handleDescription(event){
        setDescription(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                    Nombre: 
                    <input 
                        type="text"
                        onChange={handleName}
                        value={name} />
                </label>
                <br />
                <label>
                    Descripcion: 
                    <input 
                        type="text"
                        onChange={handleDescription}
                        value={description} />
                </label>
                <br />
                <button type="submit">{buttonText}</button>
            </form>
    )
}

ProjectForm.defaultProps = {
    project: {},
    buttonText: "Guardar"
}


ProjectForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
}

export default ProjectForm;