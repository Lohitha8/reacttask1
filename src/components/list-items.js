import React from 'react';
import "../list-items.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ListItems = (props) => {
    let listData = props.items.map((e) => {
        if (e.status == 'new') {
            return <div className="list listp">
                {e.text}
                <span onClick={() => props.onDelete(e.key)}>
                    <FontAwesomeIcon className='faicons' icon="trash" />
                </span>
            </div>
        }
        return <div className="list listp" style={{ textDecoration: 'line-through' }}>
            {e.text}
        </div>

    })
    return <div>{listData}</div>

}
export default ListItems