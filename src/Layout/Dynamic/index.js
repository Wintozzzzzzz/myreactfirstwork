import React, { useState } from 'react';

const DynamicInput = () => {
  const [inputs, setInputs] = useState(['']); // საწყისი მდგომარეობა ერთი შეყვანის ველით

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = index => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={event => handleInputChange(index, event)}
          />
          <button onClick={() => handleRemoveInput(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default DynamicInput;