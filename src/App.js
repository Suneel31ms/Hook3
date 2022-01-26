
import './App.css';
import DataFechingTwo from './component/1.FechingWithReducer/DataFechingTwo';
import DataFetchingOne from './component/1.FechingWithReducer/DataFetchingOne';
import ParentComponent from './component/useCallback/ParentComponent';
import Counter from './component/useMemo/Counter';
import ClassTimer from './component/useRef/ClassTimer';
import FocusInput from './component/useRef/FocusInput';
import HookTimer from './component/useRef/HookTimer';

function App() {
  return (
    <div className="App">
     {/* <DataFetchingOne/> */}
     {/* <DataFechingTwo/> */}

     {/* ---------callback----------- */}

     {/* <ParentComponent/> */}

     {/* -------------usememo--------- */}
     {/* <Counter/> */}

     {/* ---------useRef------------- */}
     {/* <FocusInput/> */}
     {/* <ClassTimer/> */}
     <HookTimer/>
    </div>
  );
}

export default App;
