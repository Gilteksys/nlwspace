
export function Button(props:any) {
  return (
    <button className="bg-blue-600 hover:bg-slate-900 text-white font-bold py-3 rounded w-40">
        {props.children}
    </button>        
  );
}
