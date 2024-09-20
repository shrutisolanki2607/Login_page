import { useSelector } from 'react-redux'

const useLoginHook = () => {

  const { authentication, name, email, password, id } = useSelector(
    (state) => state.userinfo.Information
  )

  return {
    authentication,
    name,
    email,
    password,
    id
  }
}

export default useLoginHook;
