type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return <button className="bg-violet-500  text-white">{text}</button>;
}
