import './App.css';
import Dropdown from "./Dropdown.jsx";
import SearchBar from "./SearchBar.jsx";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Dropdown options={['Java', 'Javascript', 'Python', 'C++', 'Dart', 'C#']} />
            <SearchBar />
        </div>
    );
};

export default App;