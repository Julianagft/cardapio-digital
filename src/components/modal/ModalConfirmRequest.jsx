  import { useCallback, useMemo, useState } from "react";
  import { Backdrop, Box, Modal, Fade, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
  import { X } from "@phosphor-icons/react";
import CustomButton from "../customButton/CustomButton";


  export default function ModalConfirmRequest({ open, setOpen }) {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 2,
      borderRadius: "10px",
      overflowY: "auto",
    };

    const [typeOfPayment, setTypeOfPayment] = useState("card");
    const [cardNumber, setCardNumber] = useState(null); 
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [paymentError, setPaymentError] = useState("");
    const [cardError, setCardError] = useState("");
    
    const handleFinalizeOrder = () => {
      let hasError = false;

      if (!address.trim()) {
        setAddressError("Por favor, preencha o endereço.");
        hasError = true;
      } else {
        setAddressError(""); 
      }

      if (!typeOfPayment) {
        setPaymentError("Por favor, selecione uma forma de pagamento.");
        hasError = true;
      } else {
        setPaymentError(""); 
      }

      if (typeOfPayment === "card" && (!cardNumber || !cardNumber.trim())) {
        setCardError("Por favor, preencha o número do cartão.");
        hasError = true;
      } else {
        setCardError("");
      }

      if (hasError) {
        return; 
      }

      alert("Pedido finalizado com sucesso!");
      setOpen(false);
      window.location.reload();
    };


    const renderPaymentDetails = () => {
      if (typeOfPayment === "card") {
        return (
          <div>
            <TextField
              id="card-number"
              label="Número do Cartão*"
              variant="standard"
              size="medium"
              sx={{ width: "50%" }}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
             {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
          </div>
        );
      } else if (typeOfPayment === "pix") {
        return (
          <div className="mt-4">
            <p className="text-base text-gray-600">Escaneie o QR Code abaixo para pagar:</p>
            <div className="mt-2 w-40 h-40 bg-gray-300 flex items-center justify-center">
              <div 
                 className="h-[100px] w-[100px] bg-cover bg-center bg-no-repeat rounded-lg shadow-md flex items-end transition-all duration-300 hover:bg-black/50"
                 style={{ backgroundImage: `url('/images/qrCode.png')` }}
              >
              </div>
            </div>
          </div>
        );
      }
      return null; 
    };

    return (
      <>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="px-8">
                <div className="w-full flex justify-between">
                  <p className="text-xl font-medium">
                    Finalizar Pedidos
                  </p>
                  <div>
                    <X size={20} onClick={() => setOpen(false)} className="cursor-pointer" />
                  </div>
                </div>

                <div className="mt-5 w-full flex flex-col gap-6">
                  <TextField
                    id="standard-helperText"
                    label="Endereço*"
                    variant="standard"
                    size="medium"
                    sx={{width: "80%"}}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {addressError && <p className="text-red-500 text-sm">{addressError}</p>}

                  <div className="flex flex-col gap-2">
                    <div className="">
                      <span className="text-base text-gray-600">Forma de Pagamento*</span>
                      <div className="h-[1px] w-[80%] bg-gray-500"></div>
                    </div>

                    <div>
                      <FormControl>
                        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={typeOfPayment}
                          name="radio-buttons-group"
                          row
                          onChange={(e) => setTypeOfPayment(e.target.value)}
                        >
                          <FormControlLabel value="card" control={<Radio />} label="Cartão" />
                          <FormControlLabel value="pix" control={<Radio />} label="Pix" />
                          <FormControlLabel value="payOnDelivery" control={<Radio />} label="Pagamento na Entrega" />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div>
                      {renderPaymentDetails()}
                    </div>

                    {paymentError && <p className="text-red-500 text-sm">{paymentError}</p>}
                  </div>

                  <div className="flex justify-center gap-5 ">
                    <div className="w-[20%]">
                      <CustomButton
                      customHover="hover:bg-orange-600"
                        onClick={handleFinalizeOrder}
                      >
                        Finalizar Pedido
                      </CustomButton>
                    </div>

                    <div className="w-[20%]">
                      <CustomButton
                        customHover="hover:bg-red-500"
                        onClick={() => setOpen(false)}
                      >
                        Cancelar
                      </CustomButton>
                    </div>

                  </div>

                  
                  

                </div>

              </div>
            </Box>
          </Fade>
        </Modal>
      </>
    );
  }
