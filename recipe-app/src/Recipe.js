function Recipe({ label, calories, image, ingredients }) {
  return (
    <div>
      <h1>{label}</h1>
      <ul>
        {ingredients.map(({ text }) => (
          <li>{text}</li>
        ))}
      </ul>
      <p>{calories.toFixed()} calories</p>
      <img src={image} alt={label} />
    </div>
  )
}

export default Recipe
