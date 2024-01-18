import React from "react";
import ClassComponent from "./classComponent";
import FunctionalComponent2 from "./function";

export default class Komponen extends React.Component{
    render(){
        return(
            <div>
                <ClassComponent nama="Zaky Zamani Noor"/>
                <FunctionalComponent2 nama ="Unknown"/>

            </div>
        )
    }
}