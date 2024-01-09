
function Project({data}) {
  const { name, description, apple, google, repo } = data;

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default Project;