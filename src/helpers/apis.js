const API_ROOT = 'https://cn-placement-cell.herokuapp.com';

export const APIUrls = {

    signUp : () => `${API_ROOT}/user/create`,
    signIn : () => `${API_ROOT}/user/sign_in`,

    allStudent : () => `${API_ROOT}/student/all`,
    addStudent : () => `${API_ROOT}/student/create`,
    updateStudent : () => `${API_ROOT}/student/update`,

    allInterview : () => `${API_ROOT}/interview/all`,
    addInterview : () => `${API_ROOT}/interview/create`,

    externalJobs : () => `${API_ROOT}/external_jobs`,

}