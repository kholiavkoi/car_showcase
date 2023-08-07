import React from 'react';
import { CarProps } from "@/types";
import Image from "next/image";

interface CarDetailsProps {
    isOpen: boolean
    closeModal: () => void
    car: CarProps
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
    return (
        <div>
        
        </div>
    );
};

export default CarDetails;