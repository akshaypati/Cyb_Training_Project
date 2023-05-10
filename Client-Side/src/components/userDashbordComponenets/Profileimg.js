const Profileimg=(props) =>{

     const imgs={props}
     const ut="./DBimage/"
    return (

<div>
    <div> 
    <img  src={ut+imgs.props.imgs.image} width="400rem" height="400rem"/>{imgs.artist_id}
    </div>

    <div>
    <h5>
    {imgs.props.imgs.artist_id}
    </h5>
    </div>
</div>
);
}

export default Profileimg;  