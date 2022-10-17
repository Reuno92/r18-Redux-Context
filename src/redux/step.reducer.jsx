const StepReducer = (state, action) => {
    switch (action.type) {
        case 'TEST':
            const PAYLOAD = action.payload;
            console.log('STATE: ', state);
            return {
                ...state,
                input: {
                    ...state.input,
                    one: {
                        ...state.input.one,
                        language: {
                            ...state.input.one.language,
                            defaultValue: PAYLOAD,
                            disabled: PAYLOAD === 'french'
                        }
                    }
                }
            }
        case 'TEST1':
            return {
                ...state,
                input: {
                    ...state.input,
                    one: {
                        ...state.input.one,
                        studentNumber: {
                            ...state.input.one.studentNumber,
                            defaultValue: action.payload
                        }
                    }
                }
            }
        case 'TEST2':
            return {
                ...state,
                input: {
                    ...state.input,
                    one: {
                        ...state.input.one,
                        date: {
                            ...state.input.one.date,
                            defaultValue: action.payload
                        }
                    }
                }
            }
        default:
            throw new Error('Action type don\'t exist');
    }
}

export default StepReducer;
