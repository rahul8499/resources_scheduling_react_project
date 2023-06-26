import React from 'react'
import TableHeader from '../../components/TableHeader/TableHeader'

const Dashboard = () => {
  return (
   <>
   <TableHeader pagename={'Dashboard'}/>
   <section className='flex justify-start'>
   <div
  className="box-border border bg-white border-gray-400"
  style={{
    boxSizing: 'border-box',
    height: '12rem',
    width: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'  // Added property for vertical centering
  }}
>
  hello
</div>
<div
  className="box-border border bg-white border-gray-400"
  style={{
    boxSizing: 'border-box',
    height: '12rem',
    width: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'  // Added property for vertical centering
  }}
>
  hello
</div>
<div
  className="box-border border bg-white border-gray-400"
  style={{
    boxSizing: 'border-box',
    height: '12rem',
    width: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'  // Added property for vertical centering
  }}
>
  hello
</div>




   </section>
   </>
  )
}

export default Dashboard