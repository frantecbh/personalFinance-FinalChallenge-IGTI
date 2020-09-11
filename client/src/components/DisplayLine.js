import React from 'react';
import DisplayField from './DisplayField';

import 'materialize-css/dist/css/materialize.min.css';

export default function DisplayLine({ countEntries, income, expenses }) {
  return (
    <div className="row">
      <DisplayField description="Lançamentos" value={countEntries} />
      <DisplayField description="Receitas" value={income} />
      <DisplayField description="Despesas" value={expenses} />
      <DisplayField description="Saldo" value={income - expenses} />
    </div>
  )
}
