import Project from '@/components/project'
function Projects() {
    const list = new Array(10)
    return (
        <div className='w-full h-full grid grid-cols-5 gap-4 content-start overflow-y-auto'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            
        </div>
    )
}

export default Projects