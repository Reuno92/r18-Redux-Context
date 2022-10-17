import {useContext} from "react";
import {StepContext} from "../context/step.context";

const StepComponent = () => {

    const {step, one, dispatch} = useContext(StepContext);

    const LANG = [
        { name: 'Français', value: 'french' },
        { name: 'Anglais', value: 'english' }
    ];

    return (
        <section>
            Étape {step} / 5

            <div className="form-group">
                <label htmlFor="language">Language</label>
                <select
                    {
                        ...one?.language
                    }
                    onChange={ (e) => dispatch({ type: "TEST", payload: e.target.value }) }
                    name="language" id="language">
                    {
                        LANG.map( (item, number) => (
                            <option key={number} className="" value={item.value}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="studentNumber">Student number</label>
                <input type="number"
                    {
                        ...one?.studentNumber
                    }
                   onChange={ (e) => dispatch({ type: "TEST1", payload: e.target.value })}
                   name="studentNumber"
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date"
                       {
                            ...one?.date
                       }
                    onChange={ (e) => dispatch({ type: "TEST2", payload: e.target.value })}
                />
            </div>
        </section>
    )
}

export default StepComponent;
