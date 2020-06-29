import { makeStyles } from "@material-ui/core/styles";

const useFormStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    submitAlternate: {
        [theme.breakpoints.up("xs")]: {
            justifyContent: "flex-start",
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },
    },
}));

export default useFormStyles;
