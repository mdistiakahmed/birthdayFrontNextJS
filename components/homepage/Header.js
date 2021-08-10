import Styles from '../../styles/homepage/Header.module.css'
import { useState } from 'react'
import Select from 'react-select';
import SideMenu from './SideMenu';

const Header = ({findEvent}) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    // handle onChange event of the dropdown
    const handleDayChange = e => {
        setSelectedDay(e);
    }
    const handleMonthChange = e => {
        setSelectedMonth(e);
    }
    const monthOptions = [
        {label: "January",value: "1",},
        {label: "February",value: "2",},
        {label: "March",value: "3",},
        {label: "April",value: "4",},
    ];
    const dayOptions = [
        {label: "1",value: "1",},
        {label: "2",value: "2",},
        {label: "3",value: "3",},
        {label: "4",value: "4",},
    ];
    const onSubmit = (e) => {
        e.preventDefault();
        findEvent(selectedDay,selectedMonth);
    }

    return (
        <div className={Styles.header}> 
            <div className={Styles.title}>My Birthday Facts </div>
            <form className={Styles.addform} onSubmit={onSubmit}>
                <Select className={Styles.test}
                    instanceId="1"
                    placeholder="Select Month"
                    value={selectedMonth} // set selected value
                    options={monthOptions} // set list of the data
                    onChange={handleMonthChange} // assign onChange function
                />

                <Select className={Styles.test2}
                    instanceId="2"
                    placeholder="Select Day"
                    value={selectedDay} // set selected value
                    options={dayOptions} // set list of the data
                    onChange={handleDayChange} // assign onChange function
                />
                <input type='submit' value='Find' className={Styles.btn} />
            </form>
        </div>
    )
}

export default Header
