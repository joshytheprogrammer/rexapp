// import { useAuthStore } from "@/store/auth";

export const useUserUtilities = () => {
  // const authStore = useAuthStore();
  const user = useCookie('user')

  function getUserData() {
    return user.value
  }

  return {
    getUserData
  }
}