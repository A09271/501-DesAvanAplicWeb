import { useState } from 'react';
import TravelRequestForm from './TravelRequestForm';
import ExpenseForm from './ExpenseForm';
import { Link } from 'react-router-dom'; // Import Link

function FormMenu() {
  const [selectedForm, setSelectedForm] = useState<'travel' | 'expense'>('expense');

  return (
    <div>
      <nav>
        <button
          onClick={() => setSelectedForm('travel')}
          style={{
            fontWeight: selectedForm === 'travel' ? 'bold' : 'normal',
            marginRight: 8,
          }}
        >
          Travel Request Form
        </button>
        <button
          onClick={() => setSelectedForm('expense')}
          style={{ fontWeight: selectedForm === 'expense' ? 'bold' : 'normal' }}
        >
          Expense Form
        </button>
      </nav>

      <main style={{ marginTop: 20 }}>
        {selectedForm === 'travel' && <TravelRequestForm />}
        {selectedForm === 'expense' && <ExpenseForm />}
      </main>
      <Link to='/A01027920' className='buttonlink'>
        Regresar a menu
      </Link>
    </div>
  );
}

export default FormMenu;
