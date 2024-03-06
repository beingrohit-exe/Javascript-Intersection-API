import {useState} from "react";
import {BiChevronDown} from "react-icons/bi";
import PropTypes from "prop-types";
import {IoIosSearch} from "react-icons/io";
import './App.css';

const Dropdown = ({options}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={'dropdown'} data-open={isOpen}>
            <label htmlFor="dropdown-toggle" className={'dropdown-active'}>
                <span id="dropdown-selected">{selectedOption}</span>
                <BiChevronDown/>
            </label>
            <input
                className="dropdown-toggle"
                type="checkbox"
                name="dropdown-toggle"
                id="dropdown-toggle"
                aria-controls="dropdown-list"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
            />
            <ul className="dropdown-list">
                {options.map((option) => (
                    <li
                        key={option}
                        data-option={option}
                        className={selectedOption === option ? 'active' : ''}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired
}
export default Dropdown;