/* eslint-disable react/prop-types */
import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
// This is the ListCard that's used to display the list of tasks for the task manager. 
// This component uses the redux state management to show the user id of the person who made it
// the issue name, the issue status, and possible actions like progressing the item or deleting it.
const ListCard = (items) => {
	const { item } = items;

	const dispatch = useDispatch();

	const ArrowClick = (string) => {
		dispatch(arrowClick(item, string));
	};
	const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};

	return (
		<div>
			<ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
				<li>
					<p>{item._id}</p>
				</li>
				<li>
					<p>{item.task}</p>
				</li>
				<li>
					<p>{item.status}</p>
				</li>
				<li>
					<button
						disabled={item.status === 'not done'}
						onClick={() => ArrowClick('left')}
					>
						<BiChevronLeft />
					</button>
					<button
						disabled={item.status === 'done'}
						onClick={() => ArrowClick('right')}
					>
						<BiChevronRight />
					</button>
					<button onClick={handleDelete}>
						<BiTrash />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ListCard;