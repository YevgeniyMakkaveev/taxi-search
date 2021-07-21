import './App.css';
import CustomTable from '../table/';
import ErrorBoundry from '../errorBound';

function App() {
  
  return (
    
      <div className="App">
        <ErrorBoundry>
          <div className="content">
        <div className="head">
          <h2 className="labels">Header</h2>
        </div>
        <div className="sidebar">
        </div>
        <CustomTable />
        </div>
        <div className="footer">
          <h2 className="labels">Footer</h2>
        </div>
        </ErrorBoundry>
      </div>
    
  );
}

export default App;
