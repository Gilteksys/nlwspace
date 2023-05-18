import React from 'react';

export function Formulario() {
  return (
    <form className='flex flex-col gap-5 m-6' >
      <div >
        <label htmlFor="input1">Nome</label>
        <input type="text" id="input1" />
      </div>
      <div>
        <label htmlFor="input2">Documento</label>
        <input type="text" id="input2" />
      </div>
      <div>
        <label htmlFor="input3">Contato</label>
        <input type="text" id="input3" />
      </div>
      <div>
        <label htmlFor="input4">Endereço</label>
        <input type="text" id="input4" />
      </div>
      <div>
        <label htmlFor="input5">Input 5:</label>
        <input type="text" id="input5" />
      </div>
      <div>
        <label htmlFor="input6">Input 6:</label>
        <input type="text" id="input6" />
      </div>
      <div>
        <label htmlFor="input7">Input 7:</label>
        <input type="text" id="input7" />
      </div>
      <div>
        <label htmlFor="input8">Input 8:</label>
        <input type="text" id="input8" />
      </div>
    </form>
  );
}




