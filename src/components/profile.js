import React, { createContext, useState, useContext } from 'react'

const getItem = (name) => {
    try {
        return localStorage.getItem(name) 
    } catch (e) {
        return null
    }
}

const setItem = (name, value) => {
    try {
        localStorage.setItem(name, value) 
        return value
    } catch (e) {
        return value
    }
}

const initialValue = {
    theme: getItem('theme') || 'light'
}

export const ProfileContext = createContext([initialValue, () => {}])

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(initialValue)
    const setProfileValue = (name, value) => {
        setItem(name, value)
        setProfile(v => ({ ...v, [name]: value }))
    }
    return <ProfileContext.Provider value={[profile, setProfileValue]}>{ children }</ProfileContext.Provider>
}

export const useProfile = () => {
    return useContext(ProfileContext)
}