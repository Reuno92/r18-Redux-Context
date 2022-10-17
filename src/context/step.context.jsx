import {createContext, useReducer} from 'react';
import StepReducer from '../redux/step.reducer';
import INITIAL_STATE_STEP from '../redux/state/step.state';

export const StepContext = createContext(INITIAL_STATE_STEP);

const StepContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StepReducer, INITIAL_STATE_STEP);

    return (
        <StepContext.Provider value={{
            step: state?.step,
            one: state?.input?.one,
            dispatch
        }}>
            { children }
        </StepContext.Provider>
    )
}

export default StepContextProvider;
