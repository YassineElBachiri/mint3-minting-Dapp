import { useGlobalState } from "../store"


const Loading = () => {

  const [loading] = useGlobalState('loading')
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
        flex items-center justify-center bg-black 
        bg-opacity-50 transform transition-transform
        duration-300 ${loading.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center
          items-center "
      >
        <div class="honeycomb mb-9">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
       
        <small className="text-white">{loading.msg}</small>
      </div>
    </div>
  )
}

export default Loading
