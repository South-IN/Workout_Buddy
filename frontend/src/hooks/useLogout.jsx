import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchWorkout } = useWorkoutsContext();
  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    dispatchWorkout({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};

export default useLogout;
