import { useSelector } from "react-redux"
import { RootState } from "../../redux/redux-store"
import Profile from "./Profile"


function ProfileContainer(){
    const userInfo = useSelector((state:RootState) => state.userInfo.userLogin)
    
    return (<div>
        <Profile></Profile>
    </div>)
}

export default ProfileContainer