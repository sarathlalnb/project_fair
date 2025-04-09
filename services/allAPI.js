import commonApi from "./commonApi";

export const registerUser= async (reqbody)=>{
    return await commonApi('post','/register',reqbody)
}

export const loginUser = async(reqbody)=>{
    return await commonApi('post','/login',reqbody)
}

//to add project - with REQHEADER
export const addProject = async(reqbody,reqHeader)=>{
    return await commonApi('post','/addproject',reqbody,reqHeader)
}

// get 3 projects

export const getHomeProjectData = async()=>{
    return await commonApi('get','/homeProjects',"")
}

// get all projects with reqHeader

export const getAllProjects = async(requestHeader,searchKey)=>{
    return await commonApi('get',`/getAllProjects?search=${searchKey}`,"",requestHeader)
}

export const getUserSpecifProjects = async(requestHeader)=>{
    return await commonApi('get','/userSpecificProjects',"",requestHeader)
}

// update using params

export const updateProjects = async(id,reqBody,reqHeader)=>{
    return await commonApi('put',`/project/${id}/update`,reqBody,reqHeader)
}

//delete project using params

export const deleteProject = async(id,reqHeader)=>{
    return await commonApi('delete',`/project/${id}/delete`,{},reqHeader)
}


export const editProfile = async(reqbody,reqHeader) =>{
    return await commonApi('patch',`/profile/edit`,reqbody,reqHeader)
}

//getrprofiledetails

export const getProfileDetails = async(reqHeader)=>{
    return await commonApi('get','/getUserDetails',"",reqHeader)
}