import Project from '@/components/project'
import { queryProjects } from '@/apis/project'
import {useEffect, useState} from "react"
import { ProjectResponseRootObject } from '@/utils/interface'
function Projects() {
    const [projects, setProjects] = useState<ProjectResponseRootObject[]>([])
    const queryProjectList = async () => {
        try{
            const { data } = await queryProjects()
            setProjects(data)
        }catch (e) {
            console.warn(e)
        }
    }
    useEffect(() => {
        queryProjectList()
    }, [])
    return (
        <div className='w-full h-full grid grid-cols-5 gap-4 content-start overflow-y-auto'>
            {
                projects.map(project => <Project key={project.projectId} {...project} />)
            }
        </div>
    )
}

export default Projects
