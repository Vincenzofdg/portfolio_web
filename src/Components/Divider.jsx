function Divider() {
    return (
        <div style={css.container}>
            <div style={css.divider} />
        </div>
    );
}

const css = {
    container: {
        height: "3.5px",
        display: "flex",
        justifyContent: "center",
    },
    divider: {
        backgroundColor: "rgb(29, 30, 43)",
        height: "100%",
        width: "40%",
        borderRadius: "20px",
    },
};

export default Divider;
