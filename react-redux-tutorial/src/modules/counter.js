const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

const initialState = {
    number: 0
}

const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE: 
            return {
                ...state,
                number: state.number + 1
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default counter;