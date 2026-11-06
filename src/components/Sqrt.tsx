type SqrtProps = {
  number: number;
};

export function Sqrt({ number }: SqrtProps) {
  return (
    <div className="card accent-card">
      <h2>
        Обчислення квадратного кореня з числа <span>{number}</span> = {Math.sqrt(number)}
      </h2>
    </div>
  );
}