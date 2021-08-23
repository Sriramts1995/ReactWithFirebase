import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';
import Cards from '../Ui/Cards';
function NewMeetupForm(props)
{
const titleinputRef=useRef();
const imageinputRef=useRef();
const addressinputRef=useRef();
const descinputRef=useRef();
function SubmitHandler(event)
{
event.preventDefault();

const enteredTitle=titleinputRef.current.value;
const enteredimage=imageinputRef.current.value;
const enteredaddress=addressinputRef.current.value;
const entereddesc=descinputRef.current.value;

const meetupdata={
  title:enteredTitle,
  image:enteredimage,
  address:enteredaddress,
  description:entereddesc
}
//console.log(meetupdata);
props.onAddMeetup(meetupdata)
}
 return <Cards>
 <form className={classes.form} onSubmit={SubmitHandler}>
 <div className={classes.control}>
 <label htmlFor="title">Meetup Title</label>
 <input type="text" requried id="title" ref={titleinputRef}/>
 </div>
 <div className={classes.control}>
 <label htmlFor="image">Meetup Image</label>
 <input type="url" requried id="image" ref={imageinputRef}/>
 </div>
 <div className={classes.control}>
 <label htmlFor="address">Meetup address</label>
 <input type="text" requried id="address" ref={addressinputRef}/>
 </div>
 <div className={classes.control}>
 <label htmlFor="description">Meetup Description</label>
 <textarea  id="description" requried rows='5' ref={descinputRef}></textarea>
 </div>
 <div className={classes.action}>
 <button>Submit</button>
 </div>
 </form>
 </Cards>
}
export default NewMeetupForm;
