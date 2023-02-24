import './App.css';
import {connect} from 'react-redux';
import {addTicket} from "./store/actions";
import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

function App({ticketState, addTicketWithValue}) {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state.tickets);

  const handleTicketAdd = () => {
    dispatch(addTicket(text))
    console.log(state)
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  // return (
  //   //   <div className="App">
  //   //     <div style={{display: 'flex'}}>
  //   //       <input type="text" onChange={handleChange}/>
  //   //       <button onClick={handleTicketAdd}>Add ticket</button>
  //   //     </div>
  //   //     {
  //   //       ticketState.tickets.map((elem, id) => (
  //   //           <p key={id}>{elem}</p>
  //   //       ))
  //   //     }
  //   //   </div>
  //   // );
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleTicketAdd}>Add ticket</button>
      </div>
      {
        state.map((elem, id) => (
            <p key={id}>{elem}</p>
        ))
      }
    </div>
  );
}
//Use base toolkit from react-redux
// const mapDispatchToProps = (dispatch) => ({
//   addTicketWithValue: (ticket) => dispatch(addTicket(ticket))
// });
//
// const mapStateToProps = (state) => ({
//   ticketState: state,
// });


// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;