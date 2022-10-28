import { useState } from "react";
import background from "./assets/fondEcran.png";
import { Button } from "./button";
import { ButtonBG } from "./buttonBG";
import useColor from "./colorHook";
import { ConfirmationModal } from "./confirmationModal";
import { Modal } from "./modal";
import useModal from "./modalHook";

function App() {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const [byteExchange, setByteExchange] = useState(0);
  const [MBytes, setMBytes] = useState(0);
  const { isShowing, toggle } = useModal();
  const { isGrey } = useColor();

  return (
    <div>
      <Modal
        isShown={isShowing}
        hide={toggle}
        modalContent={<ConfirmationModal />}
      />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          filter: `${isGrey ? "grayscale(100%)" : "grayscale(100%)"}`,
          height: vh,
          display: "flex",
        }}
      >
        <div
          style={{
            color: "FF5733",
            justifyContent: "center",
            alignItems: "middle",
            width: vw,
          }}
        >
          <ButtonBG onClick={toggle} />
          <div
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "grey",
                width: "400px",
                height: "200px",
                borderWidth: "2px",
                borderColor: "red",
                border: "solid",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                style={{
                  margin: "10px",
                }}
                onChange={(e) => {
                  if (parseInt(e.target.value)) {
                    setMBytes(parseInt(e.target.value));
                  }
                }}
              />
              <Button
                title={"Request to backend"}
                onClick={() => {
                  setByteExchange(byteExchange + MBytes);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
