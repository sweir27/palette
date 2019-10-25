import React from "react"
import { color } from "../helpers"
import { Icon, IconProps, Path, Title } from "./Icon"

/** BellFillIcon */
export const BellFillIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <Title>unwatch lot</Title>
      <Path
        d="M11.59125,10.22875 C10.5477671,8.7753221 9.97099646,7.03890677 9.93750001,5.25000002 L9.93750001,3.93750001 C9.93750001,1.7628788 8.17462121,0 6,0 C3.82537879,0 2.06249999,1.7628788 2.06249999,3.93750001 L2.06249999,5.25000002 C2.02900354,7.03890677 1.4522329,8.7753221 0.40874998,10.22875 C0.30536675,10.3611336 0.285077477,10.5403555 0.35624998,10.6925 C0.42986085,10.8427336 0.582702122,10.9378348 0.749999981,10.9375 L3.69874999,10.9375 C3.63265576,11.1501286 3.59729809,11.3711141 3.59374999,11.59375 C3.59375002,12.9226852 4.67106484,14 6,14 C7.32893516,14 8.40624998,12.9226852 8.40625001,11.59375 C8.40270191,11.3711141 8.36734424,11.1501286 8.30125001,10.9375 L11.25,10.9375 C11.4172979,10.9378348 11.5701392,10.8427336 11.64375,10.6925 C11.7149225,10.5403555 11.6946333,10.3611336 11.59125,10.22875 Z M7.53125001,11.59375 C7.53125001,12.4394361 6.84568603,13.125 6,13.125 C5.15431397,13.125 4.46874999,12.4394361 4.46874999,11.59375 C4.47119632,11.365935 4.52503421,11.1416104 4.62625,10.9375 L7.37375,10.9375 C7.47496579,11.1416104 7.52880368,11.365935 7.53125001,11.59375 L7.53125001,11.59375 Z"
        fill={color(props.fill)}
        fillRule="nonzero"
      />
    </Icon>
  )
}
