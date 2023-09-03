import React, {Fragment} from "react";
import {Footer, Root} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {SET_BEEP, SET_BW, SET_CROSSHAIR} from "../reducers/prefs";
import {useHistory} from "react-router-dom";
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default function Settings() {
  const dispatch = useDispatch();
  const beepOn = useSelector(state => state.prefs.beep);
  const crossHairOn = useSelector(state => state.prefs.crossHair);
  const bwOn = useSelector(state => state.prefs.bw);
  const {go} = useHistory();

  const handleSetBeep = async () => {
    dispatch(SET_BEEP(!beepOn));
  };

  const handleSetCrosshair = async () => {
    dispatch(SET_CROSSHAIR(!crossHairOn));
  };

  const handleSetBw = async () => {
    dispatch(SET_BW(!bwOn));
  };

  const beepStyle = () => {
    if (beepOn) return {
      background: "green"
    }
  };

  const crossHairStyle = () => {
    if (crossHairOn) return {
      background: "green"
    }
  };

  const bwStyle = () => {
    if (bwOn) return {
      background: "green"
    }
  };

  return (
    <Fragment>
      <Root>
        <div style={{margin: 20}}>
          <div style={{paddingTop: 180}}>
            <h3>Settings</h3>
          </div>
        </div>
      </Root>

      <Footer>
        <div>
          <Toggle
            id='beep-status'
            defaultChecked={beepOn}
            onChange={handleSetBeep}/>
          <label htmlFor='beep-status' style={{verticalAlign: "super"}}>&nbsp;Beep</label>
          <div style={{flexBasis: "100%", height: 20}}></div>
          <Toggle
            id='crosshair-status'
            defaultChecked={crossHairOn}
            onChange={handleSetCrosshair}/>
          <label htmlFor='bw-status' style={{verticalAlign: "super"}}>&nbsp;Crosshair</label>
          <div style={{flexBasis: "100%", height: 20}}></div>
          <Toggle
            id='bw-status'
            defaultChecked={bwOn}
            onChange={handleSetBw}/>
          <label htmlFor='bw-status' style={{verticalAlign: "super"}}>&nbsp;Black and white</label>

        </div>

        <div style={{flexBasis: "100%", height: 70}}></div>
        <a href="/" onClick={(e) => {
          e.preventDefault();
          go(-1);
        }}>Back</a>
      </Footer>
    </Fragment>
  );
}