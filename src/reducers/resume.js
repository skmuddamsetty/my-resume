const resumeDefaultState = {
    summary:[],
    education:[],
    headerInformation:{}
};
const resumeReducer = (state = resumeDefaultState, action) => {
    switch(action.type){
        case 'ADD_SUMMARY':
            return {
                ...state,
                summary: state.summary.concat(action.summary)
            }
        case 'ADD_EDUCATION':
            return {
                ...state,
                education: state.education.concat(action.education)
            }
        case 'ADD_HEADER_INFO':
            return {
                ...state,
                ...action.headerInformation
            }
        default:
        return state;
    }
};

export default resumeReducer;