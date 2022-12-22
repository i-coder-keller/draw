import requestHandler from '../utils/request'
import {ProjectResponseRootObject} from "@/utils/interface"

/**
 * 查询项目列表
 */
export const queryProjects = () => requestHandler<ProjectResponseRootObject[]>({
    url: '/api/projects',
    method: 'post'
})
