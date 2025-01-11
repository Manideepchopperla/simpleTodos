// Write your code here

import './index.css'
import {Component} from 'react'

class Todos extends Component {
  state = {}

  render() {
    const {list, deleteList} = this.props
    const {id, title} = list

    const onDelete = () => {
      console.log(id)
      deleteList(id)
    }
    return (
      <li className="box3">
        <p className="p1">{title} </p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default Todos
