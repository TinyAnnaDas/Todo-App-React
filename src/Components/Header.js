import React from 'react'

function Header() {

    function getToday(){
            var today = new Date();
            var day = today.getDay();
            var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
            return daylist[day]
        }
  return (
    <div className='header'>
        <div className="mainHeading">
            <h1>ToDo List</h1>
        </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getToday()}! 🌝 ☕ </h2>
      </div>
    </div>
  )
}

export default Header