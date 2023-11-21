import React from "react"
import ProjectData from "../Components/ProjectData"
import ProjectInfo from "../sidePage/ProjectInfo"
function MyProjects () {
const myProjectInfo = ProjectData.map(item => (
<ProjectInfo item = {item} />
))
    return (
<div>
    {myProjectInfo}
</div>
    )
}
export default MyProjects