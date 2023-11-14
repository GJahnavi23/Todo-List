import './Css/TodoItems.css'
import tick from './Assets/tick1.png';
import notTick from './Assets/notTick.png';
import cross from './Assets/Cross.png';

export const TodoItems = ({no,display,text,setTodos}) => {
  const deleteTodo=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }
  const toggle=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i< data.length;i++)
    {
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else
        {
          data[i].display="";
        }
        break;
      }

    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
           {display===""?<img className='todo-nontick' src={notTick} alt=''/>:<img className='todo-nontick' src={tick} alt=''/>} 
            
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitem-cross-icon' onClick={()=>{deleteTodo(no)}}src={cross} alt=''/>
    </div>
  )
}
