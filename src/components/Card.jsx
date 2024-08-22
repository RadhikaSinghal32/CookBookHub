function Card(props) {
    const { label, image } = props.recipe.recipe;
  
    return (
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={label} />
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
        </div>
      </div>
    );
  }
  
  export default Card;