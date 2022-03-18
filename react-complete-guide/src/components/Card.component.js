import "./card.css";
function CardComponent(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default CardComponent;
