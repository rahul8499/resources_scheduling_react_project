import "./App.css";
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import FilterHeader from "./components/FilterHeader/FilterHeader";
import SchedulingPage from "./pages/Scheduling/Scheduling";
import BatchList from "./pages/Batch/BatchList/BatchList";
import FacultyList from "./pages/Faculty/Facultylist/FacultyList";
import { Route, Routes } from "react-router-dom";
import FacultyCreate from "./pages/Faculty/FacultyCreate/FacultyCreate";
import BatchCreate from "./pages/Batch/BatchCreate/BatchCreate";
import Dashboard from "./pages/Dashboard/Dashboard";
import FacultyView from "./pages/Faculty/FacultyView/FacultyView";
import FacultyFormEdit from "./pages/Faculty/FacultyEdit/FacultyFormEdit";

function App() {
	return (
		<>
		{/* <FacultyCreate/> */}
			<div class="pagecolor" >
				<div className="grid grid-cols-12 ">
					<div className="col-span-1">
						<Sidebar />
					</div>
					<div className="col-span-11 box-border border-l border-gray-400 border-solid">
						<FilterHeader />
						<Routes>
							<Route path="/" element={<SchedulingPage />} />
							<Route path="/dashboard" element={< Dashboard/>} />
							<Route path="/batchlist" element={<BatchList />} />
							<Route path="/batchcreate" element={<BatchCreate />} />
							<Route path="/facultylist" element={<FacultyList />} />
							<Route path="/facultycreate" element={<FacultyCreate />} />
							<Route path="/facultyview" element={<FacultyView />} />
							<Route path="/facultyformedit" element={<FacultyFormEdit />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;




