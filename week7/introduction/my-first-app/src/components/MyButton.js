export function MyButton(props) {
    const { width, children } = props;
    return (
        <button
            style={{ width: width }}
            {...props}
            onClick={props.onClick}
        >{children}</button>
    );
}