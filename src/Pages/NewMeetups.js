import NewMeetupForm from '../meetups/NewMeetupForm'
import {useHistory} from 'react-router-dom'
function NewMeetupsPage()
{
  const history=useHistory();
  function AddMeetupHandler(meetupdata)
  {
    fetch('https://react-getting-started-98c2b-default-rtdb.firebaseio.com/meetups.json',{
      method:'POST',
      body:JSON.stringify(meetupdata),
      header:{
        'Content-Type':'application/json'
      }
    }).then(()=>
    history.replace('/')
  )
  }
  return <section>
  <h1>Add New Meetup</h1>
  <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
  </section>
}
  export default NewMeetupsPage;
