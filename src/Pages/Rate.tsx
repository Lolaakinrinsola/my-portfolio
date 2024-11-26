import useStore from "../store/useStore"

const Rate = () => {
const {space}=useStore()
  return (
    <div className={`${space}`}>Rate</div>
  )
}

export default Rate