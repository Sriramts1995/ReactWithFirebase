import {useState,useEffect} from 'react';
import MeetupLists from '../meetups/MeetupLists';
const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetupsPage()
{
  const [check,setCheck]=useState(true);
  const [loadmeetups,setloadMeetups]=useState([]);
  useEffect(()=>{
    setCheck(true);
    fetch('https://react-getting-started-98c2b-default-rtdb.firebaseio.com/meetups.json'
  ).then((response)=>
    {
      return response.json();
    }).then((data)=>{
      const meetups=[];
      for (const key in data)
      {
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setCheck(false);
      setloadMeetups(meetups)
    });
  },[]);
  if(check)
  {
    return <section>
    <p>
    Loading...
    </p>
    </section>
  }
  return <section>
    <h1>AllMeetupsPage</h1>
    <MeetupLists meetups={loadmeetups}/>
  </section>;
}
export default AllMeetupsPage;
