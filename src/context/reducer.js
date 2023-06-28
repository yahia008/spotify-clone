export const initialState ={

    user:null,
    playing:false,
    item:null,
    token:null,//'BQCMkN8WgCNobDHL5yur-j6Tep_2Lo2iHX2NDZMB4PAtLrpAyvnlAYi0SXPhXrTwFDrlpzM0fNWF2dis8aDzpeZIaoBiF10TVRAJrU0lstyy16Gf77vBD9-SkqOK2YFS9imXDuwO7FpzHaBCEH71I3XjjO0P5U0UxvYLAlTgvOP-R4ETCsCkcbYl8JRAepi00j2XATml74BWzwQFrAVy',
    playlists:[]
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }


            case 'SET_TOKEN':
                return {
                    ...state,
                token: action.token,
                }


                case 'SET_PLAYLIST':
                    return {
                        ...state,
                    playlists:action.playlists,
                    }

                    case 'SET_DISCOVER':
                        return {
                            ...state,
                        discover_weekly:action.discover_weekly,
                        }
    
        default:
            return state;
    }
}

export default reducer