import React from 'react'
import TableHeader from '../../components/TableHeader/TableHeader'
import CardHeader from '../../components/CardHeader/CardHeader'
import Table from '../../components/Table/Table'
import CalenderHeader from '../../components/CalenderHeader/CalenderHeader'
// import FacultyCardAdd from '../../components/FacultyCardAdd/FacultyCardAdd'

const SchedulingPage = () => {
  return (
  < >
  <div >
  <div>
    <TableHeader pagename="Scheduling"/>
  </div>
  <div>
    <CalenderHeader/>
  </div>
  <div>
    <CardHeader/>
  </div>
  </div>
    <Table/>   
  </>
  )
}

export default SchedulingPage