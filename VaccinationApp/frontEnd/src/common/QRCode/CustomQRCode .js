import React from "react";
import QRCode from "react-qr-code";

const CustomQRCode = ({ paymentObj }) => {
    const { userId, date, time, total } = paymentObj;

    if (userId !== null && date !==null && time !==null && total !== 0) {
        const dataToEncode = {
            userId,
            date,
            time,
            total
        };

        const objectString = JSON.stringify(dataToEncode);

        return (
            <div >
                <QRCode
                    size={100}
                    bgColor="white"
                    fgColor="black"
                    value={objectString}
                />
            </div>
        );
    } else {
        return null; // Or any other component/message you want to render when conditions are not met
    }
}

export default CustomQRCode;