const formatDate = () => {
    var curr = new Date();
    curr.setDate(curr.getDate());
    return curr.toISOString().substring(0,10);
}

const INITIAL_STATE_STEP_ONE = {
    language: {
        defaultValue: 'english',
        disabled: false,
        required: false,
    },
    studentNumber: {
        defaultValue: 2,
        disabled: false,
        required: true,
    },
    date: {
        defaultValue: formatDate(),
        disabled: false,
        required: true,
    }
}

export default INITIAL_STATE_STEP_ONE;
