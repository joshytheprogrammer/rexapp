export const useUserUtilities = () => {
  const user = useCookie('user')

  function getUserData() {
    return user.value
  }

  return {
    getUserData
  }
}