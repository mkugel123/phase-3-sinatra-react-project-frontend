import React, { useState } from "react";
import AddWaiterForm from "./AddWaiterForm";
import Home from "./Home";
import TableMap from "./TableMap";
import Totals from "./Totals";

function App() {
  const [waitersNames, setWaitersNames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/waiters/names")
    .then((r) => r.json())
    .then((data) => setWaitersNames(data))
    debugger
  }, []);

  function handleAddWaiterSubmit(name){
    setWaitersNames([...waitersNames, name])
  }

  return (
    <div>
      <div>
        <AddWaiterForm
          onAddWaiterSubmit={handleAddWaiterSubmit}
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App;
