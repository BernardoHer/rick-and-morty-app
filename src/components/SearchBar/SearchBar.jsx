
export default function SearchBar(props) {
   return (
     <div className="search-container">
       <input type="search" />
       <button onClick={() => props.onSearch("ID")}>Agregar</button>
     </div>
   );
 }