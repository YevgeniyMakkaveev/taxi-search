import './App.css';
import CustomTable from '../table/';
import ErrorBoundry from '../errorBound';

function App() {
  
  return (
    

    <ErrorBoundry>
      <div className="App">
        <div className="content">
          <div className="head">
            <div className="labels"> <h2 className="font"> Header</h2></div>
          </div>
          <div className="sidebar">
          </div>
          <CustomTable />
        </div>
        <div className="footer">
          <div className="labels"><h2 className="font">Footer</h2></div>
        </div>
      </div>
    </ErrorBoundry>
      
    
  );
}

export default App;
