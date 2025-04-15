import { useCallback, useMemo, useState } from "react";
import { Backdrop, Box, Modal, Fade } from "@mui/material";
import { X } from "@phosphor-icons/react";




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


  const handleMenuClick = (name) => {
    setMenus(
      menus.map((menu) => ({
        ...menu,
        current: menu.name === name,
      }))
    );
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
                  Consultar Orçamento e Vagas
                </p>
                {/* <CustomButton
                  variant="cancel"
                  icon={<X size={20} />}
                  onClick={() => setOpen(false)}
                /> */}
              </div>
              {/* <div className="my-5">
                <FlexibleViewMenu
                  menus={() => menus}
                  handleMenuClick={handleMenuClick}
                  activeSlideOverFromDashboard={false}
                />
              </div> */}
              {/* <div className="w-full">
                {Content && <Content />}
              </div> */}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
