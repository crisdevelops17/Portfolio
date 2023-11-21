function ProjectInfo ({item}) {
    return (
        <div className="myProjects">
            <h1>{item.name}</h1>
            <img className="myProject--pics" src={item.url} />
        </div>
    )
}
export default ProjectInfo