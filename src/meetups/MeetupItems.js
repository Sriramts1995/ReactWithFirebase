import classes from './MeetupItems.module.css'
import Cards from '../Ui/Cards'
function MeetupItems(props)
{
return <li className={classes.item}>
<Cards>
<div className={classes.image}>
<img src={props.image} alt={props.title}/>
</div>
<div className={classes.content}>
<h3>{props.title}</h3>
<address>{props.address}</address>
<p>{props.description}</p>
</div>
<div className={classes.actions}>
<button>To Favorites</button>
</div>
</Cards>
</li>
}
export default MeetupItems;
