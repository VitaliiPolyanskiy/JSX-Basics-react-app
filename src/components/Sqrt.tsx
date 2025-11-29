type SqrtProps = {
  number: number;
};

export function Sqrt({ number }: SqrtProps) {
  return (
    <h2 style={{ color: "red", fontFamily: "Verdana" }}>
      Вычисление квадратного корня из числа {number} = {Math.sqrt(number)}
    </h2>
  );
}