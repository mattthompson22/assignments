const intialState = {
    data: []
}

const catReducer = (state = intialState, action) => {
    switch(action.type) { 
        case "ADD_CAT":
            return {
                data: [action.cat, ...state.data]
            }
        case "REMOVE_CAT":
            return {
                data: state.data.filter((cat, i)=> i !== action.index)
            }
        case "EDIT_CAT":
            return {
                data: state.data.map((cat, i) => {
                    if(i=== action.index){
                        return action.newCat;
                    } else {
                        return cat;
                    }
                })
            }
        default:
            return state;
    }
}

export const addCat = cat => {
    return {
        type: "ADD_CAT",
        cat
    }
}
 
export const removeCat = index => {
    return {
        type: "REMOVE_CAT",
        index
    }
}

export const editCat = (index, newCat)=>{
    return {
        type: "EDIT_CAT",
        index,
        newCat
    }
}

export default catReducer;