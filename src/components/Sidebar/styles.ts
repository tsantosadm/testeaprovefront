import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        width: '100% !important',
        maxWidth: '800px !important',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        background: '#92918f',
        padding: '1.2rem',
        borderRadius: '1.3rem',
        boxShadow: '4px 4px 4px rgba(0,0,0,.5)'

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 800,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};