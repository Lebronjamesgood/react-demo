import React from "react"

export const userPower = {
  admin:"admin",
  guest:"guest",
}
export const UserContext = React.createContext(userPower.admin)