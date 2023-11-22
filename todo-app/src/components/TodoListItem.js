import {
    MdCheckBox,
    MdRemoveCircleOutline,
    MdCheckBoxOutlineBlank
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;