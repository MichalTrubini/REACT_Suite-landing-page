function StatsItem(props) {
    return (  
        <div className="stats__item">
            <h2 className="stats__heading">{props.number}</h2>
            <p className="stats__paragraph">{props.type}</p>
        </div>
    );
}

export default StatsItem;