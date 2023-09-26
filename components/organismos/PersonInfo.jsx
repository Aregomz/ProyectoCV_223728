// components/organisms/PersonInfo.jsx
import React from "react";
import Avatar from "../atomos/Avatar";
import PersonName from "../atomos/PersonName";
import Skills from "./Skills";

    const PersonInfo = () => {
        return (
          <div className="flex mt-10 pl-20">
            <div className=""> {/* Aplicamos padding a la derecha */}
              <Avatar
                imageUrl="https://www.realmadrid.com/img/vertical_380px/camavinga_380x501_20230810055115.jpg"
                alt="Imagen de la persona"
              />
              <PersonName name="Eduard Camavinga" />
            </div>
            <div className="align-center">
              <Skills />
            </div>
          </div>
        );
      };


export default PersonInfo;
