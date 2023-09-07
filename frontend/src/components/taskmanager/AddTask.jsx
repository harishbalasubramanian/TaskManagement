import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
// This is the AddTask component used to add tasks. Utilizes the redux
// State management coupled with dispatch and a very simple form to add tasks.
const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id));
		setState({
			task: '',
		});
	};

	return (
		<div>
			<div className='addtask'>
				<form action='' onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						placeholder='Add your task'
						onChange={handleChange}
						value={state.task}
					/>
					<button className='button'>Add Task</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;