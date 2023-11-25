import React from 'react';
import {
    MdCheckBox,
    MdRemoveCircleOutline,
    MdCheckBoxOutlineBlank
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;

    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}
// React.memo를 적용했으니 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지 않음
export default React.memo(TodoListItem);