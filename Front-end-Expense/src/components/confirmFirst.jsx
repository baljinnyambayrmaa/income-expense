
import Image from "next/image";

export const ConfirmFirst = () => {
  return (
    <div>
      <div>
        <div><Image src={"/Frame 3.png"} width={100} height={50} alt="logo" /></div>
        <div>
            <ul className="steps">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
            </ul> 
        </div>
      </div>
      <div></div>
    </div>
  );
};
