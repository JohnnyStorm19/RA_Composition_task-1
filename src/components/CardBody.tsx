import { IServerResponse } from "../models";

export function CardBody(props: IServerResponse) {
    const { image, title, description, button} = props.body;
  return (
    <>
      {image && <img src={image} className="card-img" />}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button type="button" className="card-btn">
          {button}
        </button>
      </div>
    </>
  );
}
