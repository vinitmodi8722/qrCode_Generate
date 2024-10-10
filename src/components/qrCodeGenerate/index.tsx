import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface QrCodeComponentProps {
  text: string;
}

const QrCodeGenerate: React.FC<QrCodeComponentProps> = ({ text }) => {
  return (
    <div className="h-[200px] w-[200px]">
      <QRCodeSVG value={text} size={200} level="H" />
    </div>
  );
};

export default QrCodeGenerate;
