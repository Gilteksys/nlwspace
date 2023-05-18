import { Button } from "../Button/Button";
import { Formulario } from "../formulario/Formulario";

export function Sidebar() {

   return (

      <div className="flex flex-1">
             <aside className="w-[300px] bg-gray-700 p-6 h-screen">         
         <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            CADASTRO
         </span>
         <div className="flex flex-col gap-8 border-r">
            <Button>Clientes</Button>
            <Button>OS</Button>
            <Button>Cadastros</Button>
            <Button>Peças</Button>
            <Button>Serviços</Button>

         </div>

      </aside>
      <div className="w-screen bg-slate-600 flex justify-center text-2xl ">
         <Formulario/>         
      </div>
      </div>    
  
   )
}