import { 
    CHANGE_SEARCH_FIELD, 
    CHANGE_DATA_TYPE, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchPlants = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateItems = {
    isPending: true,
    items: [],
    error: ''
}

export const requestItems = (state=initialStateItems, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, items: action.payload });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }
}

const initialDataType = {
    dataType: 'plants'
}

export const changeDataType = (state=initialDataType, action={}) => {
    switch(action.type) {
        case CHANGE_DATA_TYPE:
            return Object.assign({}, state, { dataType: action.payload });
        default:
            return state;
    }
}