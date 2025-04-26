import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [statements, setStatements] = useState([]); // For table row data
  const [formData, setFormData] = useState(null);  // for form data which i gave a list
  const [showForm, setShowForm] = useState(false); //for form display or not i gave boolean
  const [editIndex, setEditIndex] = useState(null); // for edit row index to track which we will click

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const income = formData.type === 'income' ? Number(formData.amount) : 0;
    const expense = formData.type === 'expense' ? Number(formData.amount) : 0;
    const newData = { 
      description: formData.description, 
      income, 
      expense 
    };
    if (editIndex !== null) {
      const updatedStatements = [...statements];
      updatedStatements[editIndex] = newData;
      setStatements(updatedStatements);
      setEditIndex(null);
    } else {
      setStatements([...statements, newData]);
    }
    setFormData(null);
    setShowForm(false);
  }

  const handleEdit=(index)=>{
    const item=statements[index];
    setFormData({
      description:item.description,
      type:item.income>0?'income':'expense',
      amount:item.income>0?item.income:item.expense
    });
    setEditIndex(index);
    setShowForm(true);
  }

  const handleDelete=(index)=>{
    const updatedStatements = [...statements];
    updatedStatements.splice(index, 1);
    setStatements(updatedStatements);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Income and Expense Manager</h2>
      <button onClick={() => {
        setShowForm(!showForm);
        if (!showForm && editIndex === null) {
          setFormData({ description: '', type: '', amount: 0 });
        }
      }}>
        {showForm ? 'Close' : 'Add New'}
      </button>
      {showForm && formData && (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <label>Description</label>
          <input name='description' placeholder='Description' value={formData.description || ''}
            onChange={handleChange}
            required
          />
          <label>Type</label>
          <select name='type' value={formData.type || ''} onChange={handleChange} required>
            <option value=''>Select Type</option>
            <option value='income'>Income</option>
            <option value='expense'>Expense</option>
          </select>
          <label>Amount</label>
          <input name='amount' type='number' placeholder='Amount' value={formData.amount || ''}
            onChange={handleChange}
            required
          />
          <button type='submit'>{editIndex !== null ? 'Update' : 'Add'}</button>
        </form>
      )}
      <table border={1} cellPadding={10} style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Income</th>
            <th>Expense</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement, index) => (
            <tr key={index}>
              <td>{statement.description}</td>
              <td style={{ color: 'green' }}>{statement.income > 0 ? `+${statement.income}` : ''}</td>
              <td style={{ color: 'red' }}>{statement.expense > 0 ? `-${statement.expense}` : ''}</td>
              <td>
                <button onClick={() => { handleEdit(index) }}>Edit</button>
                <button onClick={() => { handleDelete(index) }}>Delete</button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
      <div>
        <h3>Total:₹{statements.reduce((total, statement) => total + statement.income - statement.expense, 0)}</h3>
      </div>
    </div>
  );
}

export default App;
