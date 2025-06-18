function Modal({ children, closeModal }) {
    return (
        <>
            <div
                className="modal-backdrop fade show"
                style={{
                    backdropFilter: "blur(3px)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 1040,
                }}
            />

            <div
                className="modal fade show"
                tabIndex="-1"
                role="dialog"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 1050,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    overflowY: "auto",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        maxWidth: "70vw",
                        maxHeight: "70vh",
                    }}
                >
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        aria-label="Close"
                        onClick={closeModal}
                        style={{
                            position: "absolute",
                            top: "-20px",
                            right: "-20px",
                            backgroundColor: "#00000088",
                            borderRadius: "50%",
                            padding: "0.5rem",
                            zIndex: 1060,
                        }}
                    ></button>

                    <div style={{ overflow: "hidden" }}>{children}</div>
                </div>
            </div>
        </>
    );
}

export default Modal;
