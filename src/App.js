import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Form from './Form';

function App() {
  return (
    <div className="container mt-5" style={{'width':'650px', 'margin':'auto'}}>
      <Form/>
      <div className="row mt-3">
        <h6 className="mb-3">Lists</h6>
        <div className="todoList">
          <div className="list">List</div>
          <div className="btn_group">
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
