import React from "react";
import { Place } from "../../pages/HomePage";
import styled from "styled-components";

const FindMeButton = styled.button`
  font-size: 2rem;
  margin-left: 1rem;
  color: var(--complementaryColor);
  &:hover {
    color: var(--primaryColor); /* Change to your preferred hover color */
    transform: scale(1.1); /* Scale the button slightly */
   &:hover::after {
    content: "Weather at your location";
    position: absolute;
    top: 120%; /* Position tooltip below the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7); /* Background color for tooltip */
    color: #fff; /* Tooltip text color */
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    font-size: 1rem;
    opacity: 1;
    pointer-events: none;
  }

  &:hover::before {
    /* Small arrow for tooltip */
    content: "";
    position: absolute;
    top: 100%; /* Position just below the button */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  }
`;

interface Props {
  setPlace: React.Dispatch<React.SetStateAction<Place>>;
}

const FindMe: React.FC<Props> = (props) => {
  function successCallback(position: GeolocationPosition) {
    props.setPlace({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      name: "YOUR LOCATION",
    });
  }
  function errorCalback() {
    window.alert("The website has no access to your localization");
  }

  function findMeHandler() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCalback);
  }
  return (
    <FindMeButton onClick={findMeHandler}>
      <i className="bi bi-geo-alt"></i>
    </FindMeButton>
  );
};

export default FindMe;
