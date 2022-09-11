import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux-store";


export const getUserLogin = (state: RootState) => state.userInfo.userLogin;
export const getUserPhoto = (state: RootState) => state.userInfo.userPhoto?state.userInfo.userPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5srpTZoAXWINllDurGscx_Pqg_foehqAkQ&usqp=CAU";
export const getUserLvl = (state: RootState) => state.userInfo.userLvl;
export const getUserClan = (state: RootState) => state.userInfo.clan;
export const getUserClanId = (state: RootState) => state.userInfo.clanId;
export const getUserOnline = (state: RootState) => state.userInfo.online;
export const getUserRegisterData = (state: RootState) => state.userInfo.registerData;
export const getUserLastOnlineData = (state: RootState) => state.userInfo.lastOnlineData;
export const getUserFollowingCount = (state: RootState) => state.userInfo.followingCount;
export const getUserFollowersCount = (state: RootState) => state.userInfo.followersCount;
export const getUserFollowingUsers = (state: RootState) => state.userInfo.followingUsers;
export const getUserFollowersUsers = (state: RootState) => state.userInfo.followersUsers;
export const getUserComments = (state: RootState) => state.userInfo.comments;


export const getProfileDescriptionBlockInfo = createSelector([getUserLogin, getUserPhoto, getUserLvl,getUserClan,getUserClanId,
    getUserOnline,getUserRegisterData,getUserLastOnlineData,getUserFollowingCount,getUserFollowersCount], (userLogin,userPhoto,userLvl,clan,clanId,online,registerData,lastOnlineData,followingCount,followersCount) => {
    return{
        userLogin,userPhoto,userLvl,clan,clanId,online,registerData,lastOnlineData,followingCount,followersCount
    }
})