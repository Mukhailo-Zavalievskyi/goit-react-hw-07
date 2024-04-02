import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <div className={css.text}>
        <b>Oops! Error! Reload please!</b>
        </div>
    )
}