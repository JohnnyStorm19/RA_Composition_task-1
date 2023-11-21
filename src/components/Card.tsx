import { ICardProps } from "../models";

export function Card({ children }: ICardProps) {
  return <div className="card-container">{children}</div>;
}
