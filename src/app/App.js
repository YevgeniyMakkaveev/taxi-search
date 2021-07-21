import './App.css';
import CustomTable from '../table/';


function App() {
  return (
    <div className="App">
       <div className="head">
         <h2 className="labels">Header</h2>
         
 </div>
      <div className="sidebar">
      </div>
      <CustomTable/>
      <div className="footer">
       
         <h2 className="labels">Footer</h2>
       
      </div>
    </div>
  );
}

export default App;
