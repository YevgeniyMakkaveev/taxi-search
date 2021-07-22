import './App.css';
import CustomTable from '../table/';
import ErrorBoundry from '../errorBound';

function App() {
  
  return (
    

    <ErrorBoundry>
      <div className="App">
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
      </div>
    </ErrorBoundry>
      
    
  );
}

export default App;
