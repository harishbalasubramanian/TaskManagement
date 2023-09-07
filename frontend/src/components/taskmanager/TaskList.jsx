import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';
import './tasklist.scss';
// This just uses the ListCard to display all of the tasks
// It passes in the user's id and token to display all of the tasks that match with that user's id and token

const TaskList = () => {
	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks } = tasks;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	return (
		<div>
			<ul className='list-header'>
				<li>
					<h5>Id</h5>
				</li>
				<li>
					<h5>Issue Name</h5>
				</li>
				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>
			{Object.values(AllTasks).map((item) => {
				return <ListCard key={item._id} item={item} />;
			})}
		</div>
	);
};

export default TaskList;