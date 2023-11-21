export interface ICardBodyProps {
  image?: string;
  title: string;
  description: string;
  button: string;
}

export interface IServerResponse {
    body: ICardBodyProps;
}

export interface ICardProps {
  children: JSX.Element;
}
