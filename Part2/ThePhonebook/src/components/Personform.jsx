
const Personform = ({addnewperson, newName, handlenewname, number, handlenumber}) => {
  return (
    <form onSubmit={addnewperson}>
        <div>
          name: <input value={newName} onChange={handlenewname} />
        </div>
        <div>number: <input value={number} onChange={handlenumber} pattern="\d+"/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Personform
