import NewSpecimen from './components/NewSpecimen'
import { useState } from 'react'
import SpecimenDetails from './components/SpecimenDetails'
// import Preview from './components/Preview'
import PatientHistory from './components/PatientHistory'
function App() {
	// const [newSpecimen, setNewSpecimen] = useState(false)
	// const [specimenDetails, setSpecimenDetails] = useState(false)

	const [comp, setComp] = useState(0)
	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className="text-2xl font-bold mb-5">AMROR Dashboard</h1>
				<div className="flex">
					<button
						className="bg-blue-500 text-white py-2 px-4 rounded mr-4 h-[6vh]"
						onClick={() => { 
							setComp(1)
						}}>
							
						Patient History
					</button>
					<button
						className="bg-green-500 text-white py-2 px-4 rounded mr-4 h-[6vh]"
						onClick={() => {
							// setNewSpecimen(true)
							// setSpecimenDetails(false)
							setComp(2)
						}}>
						New Specimen
					</button>
					<button
						className="bg-green-500 text-white py-2 px-4 rounded  mr-4"
						onClick={() => {
							// setSpecimenDetails(true)
							// setNewSpecimen(false)
							setComp(3)
						}}>
						Enter Specimen Details
					</button>
				</div>
				{comp === 1 && <PatientHistory />}
				{comp === 2 && <NewSpecimen />}
				{comp === 3 && <SpecimenDetails />}
			</div>
		</>
	)
}

export default App
