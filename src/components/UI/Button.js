import '../../css/button.css'

function Button(props) {

    const classes = props.className;

    return ( 
        <button className={classes}>{props.children}</button>
     );
}

export default Button;