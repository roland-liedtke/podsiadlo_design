import React from "react";
import RoundedButton from "./RoundedButton";

const PackageCard = ({ name, description, children }) => {
    return (
        <div className="package-card py-4 px-2">
            <h2 className="text-center">{name}</h2>
            <p className="text-center">{description}</p>
            {children}
            <RoundedButton></RoundedButton>
        </div>
    )
}

export default PackageCard