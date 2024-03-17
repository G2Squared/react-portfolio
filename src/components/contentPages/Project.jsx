function Project({ project }) {
    return (
        <section className="projectFlexItem blueHover" style={{ backgroundColor: '#48cae4ff', width: '1000px', height: '450px', backgroundImage: `url(${project.image})` }} title={project.title}>
            <a href={project.liveLink} target="_blank">
                <figure className="projectCardHeader" style={{ backgroundColor: '#023e8aff', color: 'white' }}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank" className="githubLink" style={{ color: 'white' }}>Github Repo</a>
                </figure>
            </a>
        </section>
    );
}

export default Project;
