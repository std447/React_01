import './style.css'

const Tile01 = ({name, cb}) => {
  return(
    <>
      <div className='tile'>
        <span className='tilename'>{name}</span>
        <button onClick={cb}>X</button>
      </div>
    
    </>
  )
}

export default Tile01;